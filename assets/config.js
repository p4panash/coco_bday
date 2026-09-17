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
  // (Dropped "the book was the decoy" — the crawl already tells that story
  // in detail now, no need to repeat it here. Also dropped "carried with
  // both hands", which didn't square with the "bring a car" line below.)
  tagline:
    "Your real present is out there — wrapped, real, heavier than it looks, and waiting for you to come get it.",

  // Deliberately vague — say roughly how far, not what's actually there.
  lockerLocation: "About 28km north. Bring the car, not the bike.",

  // Caption printed under the pickup barcode
  qrCaption: "Show this at the counter. No explaining required.",

  // Two nav-app buttons, side by side. Both point at the real spot even
  // though the copy above stays vague — pick whichever app he actually uses.
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Strada+Morii+220W+Sfantu+Ilie+Suceava+Romania",
  wazeLink:
    "https://www.waze.com/ul?q=Strada+Morii+220W+Sfantu+Ilie+Suceava+Romania&navigate=yes",

  // How you sign off
  signOff: "— the gang",

  // Set to true to jump straight to the reveal (handy while editing)
  skipIntro: false,
};
