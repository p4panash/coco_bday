# coco_bday — Phase 3: "Nice try."

The final leg of the birthday hunt. A friend gets mailed a book he left behind,
wrapped like a real gift from the gang. On the book: a printed QR code that lands
here. This page laughs at him, hints that the real present is a **LEGO Star Wars**
set, and hands over the location + a second QR for the Easybox.

## How it works

```
book + printed QR  ──scan──▶  this GitHub Pages site
                                  │
                                  ├─ Star Wars intro crawl ("it was the book, always the book")
                                  ├─ THE REVEAL: "you didn't think that was it"
                                  ├─ hints about the LEGO Star Wars set
                                  └─ Easybox location + code + 2nd QR ──scan──▶ Maps / locker
```

## Editing it (this is all you need)

Everything lives in **`assets/config.js`**. No HTML required. Set:

| field            | what it is |
|------------------|------------|
| `friendName`     | who it's addressed to |
| `setName`        | teasing hint line about the LEGO set |
| `lockerLocation` | where the Easybox is |
| `lockerCode`     | pickup code for the locker (if you have it) |
| `qrTarget`       | URL the on-page QR encodes — usually a Google Maps link to the Easybox |
| `qrCaption`      | caption under the QR |
| `mapLink`        | "Open in Maps" button target |
| `signOff`        | how you sign it |
| `skipIntro`      | `true` while editing, so you skip the 60s crawl |

Commit + push and GitHub Pages redeploys in ~1 minute.

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 — add `?` nothing needed, or set `skipIntro: true`.

## Deploy (GitHub Pages)

Pages is served from the `main` branch root. After push:
`Settings ▸ Pages ▸ Build and deployment ▸ Source: Deploy from a branch ▸ main / root`.

Live URL: `https://<user>.github.io/<repo>/`

## The two QR codes — don't mix them up

1. **Printed on the book** → encodes this site's URL. You make this one yourself.
2. **On this page** → encodes `qrTarget` (the Easybox). Generated automatically.
