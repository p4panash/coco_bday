(function () {
  "use strict";

  var cfg = window.PRANK_CONFIG || {};

  /* ---------- Starfield ---------- */
  var canvas = document.getElementById("starfield");
  var ctx = canvas.getContext("2d");
  var stars = [];
  var W, H;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    var count = Math.round((W * H) / 6000);
    stars = [];
    for (var i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.4 + 0.2,
        tw: Math.random() * Math.PI * 2,
        sp: Math.random() * 0.02 + 0.005,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      s.tw += s.sp;
      var a = 0.4 + Math.sin(s.tw) * 0.35;
      ctx.globalAlpha = a < 0 ? 0 : a;
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();

  /* ---------- Fill in reveal content from config ---------- */
  function setText(id, value) {
    var el = document.getElementById(id);
    if (el && value) el.textContent = value;
  }
  setText("gotcha", cfg.gotcha);
  setText("birthdayLine", cfg.birthdayLine);
  setText("revealSubtitle", cfg.revealSubtitle);
  setText("tagline", cfg.tagline);
  setText("lockerLocation", cfg.lockerLocation);
  setText("qrCaption", cfg.qrCaption);
  setText("signOff", cfg.signOff);

  var mapLink = document.getElementById("mapLink");
  if (mapLink && cfg.mapLink) {
    mapLink.href = cfg.mapLink;
  }
  var wazeLink = document.getElementById("wazeLink");
  if (wazeLink && cfg.wazeLink) {
    wazeLink.href = cfg.wazeLink;
  }

  // The pickup code is a real courier barcode image (assets/pickup-code.png,
  // set directly in index.html) rather than a QR generated from a URL —
  // nothing to build here.

  /* ---------- "Open in Maps" action sheet ---------- */
  var mapMenuBtn = document.getElementById("mapMenuBtn");
  var mapMenu = document.getElementById("mapMenu");
  if (mapMenuBtn && mapMenu) {
    function openMapMenu() {
      mapMenu.hidden = false;
    }
    function closeMapMenu() {
      mapMenu.hidden = true;
    }
    mapMenuBtn.addEventListener("click", openMapMenu);
    mapMenu.addEventListener("click", function (e) {
      if (e.target.closest("[data-close-menu]")) closeMapMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !mapMenu.hidden) closeMapMenu();
    });
  }

  /* ---------- Intro -> reveal transition ---------- */
  var crawlScene = document.getElementById("crawl-scene");
  var reveal = document.getElementById("reveal");
  var skipBtn = document.getElementById("skip");
  var done = false;

  var autoTimer = null;

  function showReveal() {
    if (done) return;
    done = true;
    if (autoTimer) clearTimeout(autoTimer);
    crawlScene.classList.add("hidden");
    reveal.classList.remove("hidden");
    reveal.classList.add("fade-in");
    window.scrollTo(0, 0);
  }

  if (cfg.skipIntro) {
    showReveal();
  } else {
    if (skipBtn) skipBtn.addEventListener("click", showReveal);

    // Safety net only — the real cutover happens when the crawl text
    // visually clears the top of the screen (see the rAF watcher below).
    // Keep this well above how long the crawl could plausibly take, in
    // case the tab was backgrounded the whole time and rAF never ran.
    var FALLBACK_MS = 70000;
    // How close to the top the last line has to get (as a fraction of
    // viewport height) before we call it "cleared" and cut over, plus a
    // short beat so it doesn't feel abrupt.
    var CLEAR_THRESHOLD = 0.25;
    var CLEAR_BEAT_MS = 450;

    var tapHint = document.getElementById("tapHint");
    var crawlContent = document.querySelector(".crawl-content");

    var remaining = FALLBACK_MS;
    var runningSince = Date.now();
    var paused = false;
    var lastTap = 0;
    autoTimer = setTimeout(showReveal, remaining);

    function setPaused(next) {
      if (done || next === paused) return;
      paused = next;
      crawlScene.classList.toggle("is-paused", paused);
      if (tapHint) tapHint.classList.add("gone");
      if (paused) {
        clearTimeout(autoTimer);
        remaining -= Date.now() - runningSince;
      } else {
        runningSince = Date.now();
        autoTimer = setTimeout(showReveal, Math.max(remaining, 0));
      }
    }

    // Primary cutover: watch the crawl's actual rendered position rather
    // than racing a fixed timer against the CSS animation's duration — so
    // retuning the crawl's speed/length never reintroduces a dead-air gap
    // before the cutover.
    if (crawlContent) {
      (function watch() {
        if (done) return;
        if (!paused) {
          var bottom = crawlContent.getBoundingClientRect().bottom;
          if (bottom < window.innerHeight * CLEAR_THRESHOLD) {
            setTimeout(showReveal, CLEAR_BEAT_MS);
            return;
          }
        }
        requestAnimationFrame(watch);
      })();
    }

    // Use pointerdown, NOT click: the crawl text is scrolling, so a tap's
    // up-target differs from its down-target and the browser fires no click.
    document.addEventListener("pointerdown", function (e) {
      if (done) return;
      if (e.target.closest && e.target.closest("#skip")) return;
      var now = Date.now();
      if (now - lastTap < 300) return; // ignore accidental double-fire
      lastTap = now;
      setPaused(!paused);
    });

    document.addEventListener("keydown", function (e) {
      if (done) return;
      if (e.key === " " || e.key === "Spacebar" || e.key === "k") {
        e.preventDefault();
        setPaused(!paused);
      } else if (e.key === "Escape" || e.key === "Enter") {
        showReveal();
      }
    });
  }
})();
