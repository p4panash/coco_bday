# coco_bday — Phase 3: "Nice try."

> **⚠️ Retired — no longer part of the live prank.** The two-package plan this
> was built for fell through (delivery/pickup logistics), so the whole thing
> got merged into a single hunt: [`coco-hunt`](https://github.com/p4panash/coco-hunt).
> This site's crawl + "HAPPY BIRTHDAY" reveal now live there as the hunt's
> cold open. This repo and its Pages deploy are left up for reference but
> nothing points to them anymore.

The final leg of the birthday hunt. A friend gets mailed a book he left behind,
wrapped like a real gift from the gang. On the book: a printed QR code that lands
here. This page laughs at him, hints that the real present is a **LEGO Star Wars**
set, and hands over the location + a second QR for the Easybox.

## How it works

```
book + printed QR  ──scan──▶  this GitHub Pages site
                                  │
                                  ├─ Star Wars intro crawl ("it was the book, always the book")
                                  │   (auto-advances after ~17s, or tap "skip intro")
                                  ├─ THE REVEAL: big "HAPPY BIRTHDAY" in Star Wars type
                                  │   (the theme is the only hint that the gift is Star Wars)
                                  └─ Easybox location + code + 2nd QR ──scan──▶ opens the locker
```

## Editing it (this is all you need)

Everything lives in **`assets/config.js`**. No HTML required. Set:

| field            | what it is |
|------------------|------------|
| `gotcha`         | small line above the hero |
| `birthdayLine`   | the hero — biggest thing on the page ("Happy Birthday") |
| `revealSubtitle` | small line under the hero; the gift hint — keep it a Star Wars riff |
| `tagline`        | one light sentence under that |
| `lockerLocation` | where the Easybox is |
| `lockerCode`     | pickup code, shown as a fallback if the QR won't scan |
| `qrTarget`       | what the on-page QR encodes — ideally the courier's "open locker" link, else a Maps link |
| `qrCaption`      | caption under the QR |
| `mapLink`        | "Open in Maps" button target |
| `signOff`        | how you sign it |
| `skipIntro`      | `true` while editing, so you skip straight to the reveal |

Commit + push and GitHub Pages redeploys in ~1 minute.

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 — or set `skipIntro: true` to skip the crawl.

## Deploy (GitHub Pages)

Pages is served from the `main` branch root. After push:
`Settings ▸ Pages ▸ Build and deployment ▸ Source: Deploy from a branch ▸ main / root`.

Live URL: `https://<user>.github.io/<repo>/`

## The two QR codes — don't mix them up

1. **Printed on the book** → encodes this site's URL. You make this one yourself.
2. **On this page** → encodes `qrTarget` (the Easybox). Generated automatically.
