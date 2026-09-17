# coco_bday — Phase 3: "Nice try."

> **Live again as of 2026-09-17.** Briefly retired in favor of a single-hunt
> app ([`coco-hunt`](https://github.com/p4panash/coco-hunt)), but the DPD
> locker delivery for that plan failed too (the package never actually made
> it into the locker), so the GPS-gated hunt doesn't make sense right now —
> back to this page, reached via the book's QR. The crawl now tells that
> whole saga (book plan → girlfriend intercept → locker plan → also failed)
> instead of pretending it didn't happen. This could flip again; don't be
> surprised.

The final leg of the birthday prank. A friend gets mailed a book he left behind,
wrapped like a real gift from the gang. On the book: a printed QR code that lands
here. This page laughs at him, catches him up on exactly how chaotic delivery
logistics have been, hints that the real present is a **LEGO Star Wars** set, and
hands over a rough distance + the real courier pickup barcode.

## How it works

```
book + printed QR  ──scan──▶  this GitHub Pages site
                                  │
                                  ├─ Star Wars intro crawl ("The Phantom Package" —
                                  │   the book, the girlfriend intercept, the failed
                                  │   locker delivery, all of it)
                                  │   (auto-advances once the text clears, or tap "skip intro")
                                  ├─ THE REVEAL: big "HAPPY BIRTHDAY" in Star Wars type
                                  │   (the theme is the only hint that the gift is Star Wars)
                                  └─ vague distance + real pickup barcode ──▶ show it at the counter
```

## Editing it (this is all you need)

Everything lives in **`assets/config.js`**. No HTML required. Set:

| field            | what it is |
|------------------|------------|
| `gotcha`         | small line above the hero |
| `birthdayLine`   | the hero — biggest thing on the page ("Happy Birthday") |
| `revealSubtitle` | small line under the hero; the gift hint — keep it a Star Wars riff |
| `tagline`        | one light sentence under that |
| `lockerLocation` | keep this VAGUE (distance/direction only) — the courier/place name is deliberately not said out loud |
| `qrCaption`      | caption under the barcode image |
| `mapLink`        | Google Maps target in the "Open in Maps" action sheet — this one CAN be the real address, it's just a link, not narrated copy |
| `wazeLink`       | Waze target in the same sheet, `waze.com/ul?q=...&navigate=yes` format |
| `signOff`        | how you sign it |
| `skipIntro`      | `true` while editing, so you skip straight to the reveal |

The pickup image itself is `assets/pickup-code.png` — a real 1D barcode (courier's actual "delivery code"), not a generated QR. Replace that file directly (any image works; the markup is a plain `<img>`) if the pickup method changes again. The code isn't repeated as text anywhere — it's already printed under the bars in that image.

**Heads up:** that barcode is a live pickup credential for a real parcel and this repo/Pages site is public. Low risk while the noindex/nofollow meta tag holds and nobody links to it, but worth knowing — swap the image (or take the repo private, which needs a paid GitHub plan for Pages) if that ever feels too loose.

Commit + push and GitHub Pages redeploys in ~1 minute (occasionally longer — GitHub's own build queue, not something to retry over). **Then hard-refresh before you judge the result** — `style.css`/`config.js`/`main.js` are loaded with a `?v=4` cache-buster precisely because a phone that visited before your edit can otherwise keep showing the old copy for a while. Bump that number again next time you edit any of the three.

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 — or set `skipIntro: true` to skip the crawl.

## Deploy (GitHub Pages)

Pages is served from the `main` branch root. After push:
`Settings ▸ Pages ▸ Build and deployment ▸ Source: Deploy from a branch ▸ main / root`.

Live URL: `https://<user>.github.io/<repo>/`

## Two different codes — don't mix them up

1. **Printed on the book** → a QR you make yourself, encoding this site's URL.
2. **On this page** → `assets/pickup-code.png`, the real courier barcode. Not generated — it's a screenshot of the actual pickup code, swapped in directly as an image.
