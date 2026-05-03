# Image Placeholders — Replace These

Drop your real assets in this folder using the filenames below. The HTML
already references them, so swapping the file is a one-step change.

## Required

| File | Purpose | Recommended size |
|---|---|---|
| `logo-placeholder.svg` | Logo in nav bar + footer | SVG (vector) or 512×512 PNG |
| `app-icon-placeholder.png` | App icon (large, on the landing page if you choose to show it) | 512×512 PNG |
| `screenshot-1.png` | Feature row 1 — Assist | 1206 × 2622 PNG (iPhone Pro Max) |
| `screenshot-2.png` | Feature row 2 — Log | 1206 × 2622 PNG |
| `screenshot-3.png` | Feature row 3 — History | 1206 × 2622 PNG |
| `screenshot-4.png` | Feature row 4 — Characters | 1206 × 2622 PNG |

The pages currently show a dashed-border placeholder labeled
"Screenshot placeholder · screenshot-N.png" where each screenshot belongs.
Once you drop in the real PNG, edit the corresponding `<div class="shot-placeholder">…</div>`
block in `index.html` and replace it with `<img src="assets/images/screenshot-N.png" alt="…">`.

## Optional

- Custom OG image at `og-image.png` (1200×630) for link previews. The HTML
  has a commented-out `<meta property="og:image">` waiting for it.
- Replace the App Store badge: see the `.appstore-badge` block in
  `index.html`. Apple provides official SVG badges at
  https://developer.apple.com/app-store/marketing/guidelines/ — once you
  have the App Store URL, swap the `href="#app-store-coming-soon"`.
