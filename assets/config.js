/* ============================================================
   EDIT THIS FILE ONLY. No HTML/CSS knowledge needed.
   Everything the prank needs lives here.
   ============================================================ */

window.PRANK_CONFIG = {
  // Who is the victim^Wlucky recipient
  friendName: "REPLACE_ME (his name)",

  // The "gotcha" line above the title
  gotcha: "Ha. You didn't think that was it.",

  // The big Star-Wars-logo-styled title. THIS is the only hint about the
  // gift — keep it an obvious Star Wars riff (e.g. "The Gift Awakens",
  // "Return of the Gift", "A New Hope", "Revenge of the Bricks").
  revealTitle: "The Gift Awakens",

  // One-line tag under the title. Keep it light — the theme does the hinting.
  tagline:
    "The book was the decoy. Your real present is waiting in a locker across town — heavier than it looks, and best carried with both hands.",

  // Where the Easybox is
  lockerLocation: "REPLACE_ME — e.g. Easybox Kaufland Militari, București",

  // Pickup / locker code he types on the Easybox screen (if you have one yet)
  lockerCode: "REPLACE_ME — e.g. 12345678",

  // Where the SECOND QR code should point.
  // Best: a Google Maps link to the Easybox. Could also be the courier
  // tracking page, or a plain text note. This becomes the QR on the page.
  qrTarget: "https://maps.google.com/?q=REPLACE_ME",

  // Caption printed under the QR on the page
  qrCaption: "Scan this for directions to the locker",

  // "Open in Maps" button — usually same as qrTarget
  mapLink: "https://maps.google.com/?q=REPLACE_ME",

  // How you sign off
  signOff: "— the gang",

  // Set to true to jump straight to the reveal (handy while editing)
  skipIntro: false,
};
