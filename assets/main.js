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
  setText("lockerCode", cfg.lockerCode);
  setText("qrCaption", cfg.qrCaption);
  setText("signOff", cfg.signOff);

  var mapLink = document.getElementById("mapLink");
  if (mapLink && (cfg.mapLink || cfg.qrTarget)) {
    mapLink.href = cfg.mapLink || cfg.qrTarget;
  }

  /* ---------- Build the QR code ---------- */
  var qrEl = document.getElementById("qrcode");
  if (qrEl && cfg.qrTarget && window.QRCode) {
    try {
      new window.QRCode(qrEl, {
        text: cfg.qrTarget,
        width: 176,
        height: 176,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: window.QRCode.CorrectLevel.M,
      });
    } catch (e) {
      qrEl.textContent = "QR: " + cfg.qrTarget;
    }
  } else if (qrEl) {
    qrEl.textContent = "Set qrTarget in config.js";
    qrEl.style.color = "#000";
    qrEl.style.fontSize = "12px";
    qrEl.style.padding = "16px";
  }

  /* ---------- Intro -> reveal transition ---------- */
  var crawlScene = document.getElementById("crawl-scene");
  var reveal = document.getElementById("reveal");
  var skipBtn = document.getElementById("skip");
  var done = false;

  function showReveal() {
    if (done) return;
    done = true;
    crawlScene.classList.add("hidden");
    reveal.classList.remove("hidden");
    reveal.classList.add("fade-in");
    window.scrollTo(0, 0);
  }

  if (cfg.skipIntro) {
    showReveal();
  } else {
    if (skipBtn) skipBtn.addEventListener("click", showReveal);

    // The crawl is a fixed-length linear animation (style.css: 3s hold +
    // 27s scroll). Cut to the reveal right as the last line dissolves into
    // the top fade. One deterministic timer, no guessing.
    setTimeout(showReveal, 26000);
  }
})();
