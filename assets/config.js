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
    "The book was the decoy. Your real present is waiting about 28km north — heavier than it looks, and best carried with both hands.",

  // Deliberately vague — say roughly how far, not what's actually there.
  lockerLocation: "About 28km north. Bring the car, not the bike.",

  // The real pickup code printed under the barcode below (assets/pickup-code.png).
  // Shown as a fallback in case the barcode image won't scan.
  lockerCode: "963837818",

  // Caption printed under the pickup barcode
  qrCaption: "Show this at the counter. No explaining required.",

  // "Open in Maps" button target — points at the real spot even though the
  // copy above stays vague.
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Strada+Morii+220W+Sfantu+Ilie+Suceava+Romania",

  // How you sign off
  signOff: "— the gang",

  // Set to true to jump straight to the reveal (handy while editing)
  skipIntro: false,
};
