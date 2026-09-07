/* ============================================================
   EDIT THIS FILE ONLY. No HTML/CSS knowledge needed.
   Everything the prank needs lives here.
   ============================================================ */

window.PRANK_CONFIG = {
  // Small line above the big "HAPPY BIRTHDAY"
  gotcha: "Ha. You didn't think that was it.",

  // The hero line — the biggest thing on the page.
  birthdayLine: "Happy Birthday",

  // Smaller line under the hero. This is where the gift hint lives —
  // keep it an obvious Star Wars riff ("Episode X · The Gift Awakens",
  // "Return of the Gift", "A New Hope", "Revenge of the Bricks", ...).
  revealSubtitle: "Episode X · The Gift Awakens",

  // One-line tag under that. Keep it light — the theme does the hinting.
  tagline:
    "The book was the decoy. Your real present is waiting in a locker across town — heavier than it looks, and best carried with both hands.",

  // Where the Easybox is
  lockerLocation: "REPLACE_ME — e.g. Easybox Kaufland Militari, București",

  // Pickup / locker code, shown as a fallback in case the QR won't scan
  lockerCode: "REPLACE_ME — e.g. 12345678",

  // Where the SECOND QR code points. Ideally the Easybox "open locker" link
  // from the courier (so he just scans it at the machine). A Google Maps
  // link to the locker also works if that's all you have.
  qrTarget: "https://maps.google.com/?q=REPLACE_ME",

  // Caption printed under the QR on the page
  qrCaption: "Scan this at the Easybox — no need to punch in the code",

  // "Open in Maps" button target
  mapLink: "https://maps.google.com/?q=REPLACE_ME",

  // How you sign off
  signOff: "— the gang",

  // Set to true to jump straight to the reveal (handy while editing)
  skipIntro: false,
};
