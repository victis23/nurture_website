# NurturAI — Marketing Website

Static landing site + legal pages for **Nurtur: AI Baby Assistant**, designed
to be hosted on **Firebase Hosting**.

## Structure

```
NurturAI_Website/
├── public/                          ← deployed root
│   ├── index.html                   ← landing page
│   ├── terms.html                   ← Terms of Use
│   ├── privacy.html                 ← Privacy Policy
│   └── assets/
│       ├── css/styles.css
│       ├── js/firebase-init.js      ← Firebase + Analytics initialization
│       └── images/
│           ├── logo-placeholder.svg
│           └── PLACEHOLDERS.md      ← what to swap in
├── firebase.json                    ← hosting config
├── .firebaserc                      ← project ID (configured: nurtureai-a98ee)
└── .gitignore
```

## Firebase

The site is wired up to the **`nurtureai-a98ee`** Firebase project (same
project as the iOS app):

- `.firebaserc` is configured with the project ID.
- `public/assets/js/firebase-init.js` initializes Firebase JS SDK +
  Analytics on every page using the web config from the Firebase console.
  Loaded from Google's ESM CDN — no build step or `npm install` needed.

## Before deploying

Two things still to swap before going live:

1. **Image placeholders** — see [`public/assets/images/PLACEHOLDERS.md`](public/assets/images/PLACEHOLDERS.md)
   for the list of files to drop in (logo, app icon, screenshots).
2. **App Store URL** — search `public/index.html` for `app-store-coming-soon`
   (3 spots) and replace with the real App Store link once it's live.

There are also a handful of `LEGAL_PLACEHOLDER` HTML comments in
`terms.html` marking spots that need your legal entity name, state, and
arbitration city. Search the file for `LEGAL_PLACEHOLDER` to find them.

## Local preview

The site is plain HTML/CSS — open `public/index.html` directly in a
browser, or run any static server. With the Firebase CLI installed:

```bash
firebase serve --only hosting
```

…which serves at `http://localhost:5000` and respects `firebase.json`
rewrites (so `/terms` and `/privacy` resolve correctly).

## Deploy

```bash
firebase login
firebase deploy --only hosting
```

That's it. Firebase will print the live URL (e.g. `https://your-project.web.app`).

## Design notes

- **Light theme only.** Mirrors `NurturColors` light palette from the iOS
  app: warm cream background `#FAF8F4`, orange accent `#C8522A`, warm
  surface `#F3EFE8`.
- **DM Sans** loaded from Google Fonts — same family as the app.
- **Apple "liquid glass"** — frosted nav bar, glass cards, soft warm
  gradient blobs anchored to `body::before` / `body::after`.
- **No JavaScript.** Pure HTML + CSS. Fast, no build step, no dependencies.
- **Responsive** down to ~360px.
- **Accessibility** — semantic HTML, alt text on images, `prefers-reduced-motion`
  honored, color contrast checked against WCAG AA on text.

## Updating legal copy later

The terms / privacy copy was lifted verbatim from the iOS app's
`TermsString.swift` and `PrivacyPolicy.swift`. If you update those in the
app, mirror the changes in `terms.html` / `privacy.html`. The "Last
updated" date is in the `legal-hero` section of each page.
