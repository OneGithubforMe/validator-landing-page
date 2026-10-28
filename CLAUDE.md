# CLAUDE.md — validator-landing-page (redastic.com)

Static marketing + legal site for **Visualizer** (Android app `com.visualizer.app`, by Redastic). Hosted on GitHub Pages at `https://redastic.com`. No build step, no backend, no database. See `README.md` for the page table and deploy steps.

> This file is public: the Pages workflow uploads the whole repo (`path: .`), so it is served at `redastic.com/CLAUDE.md`. Never put anything private here.

## Stack
Plain HTML + one CSS file + vanilla JS. Google Fonts (Inter). GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`), custom domain via `CNAME`, `.nojekyll` (no Jekyll processing).

## Layout
- `index.html` — product homepage.
- `privacy/`, `terms/`, `data-deletion/` — legal pages linked from Play Console. `delete-account/` is a meta-refresh/JS redirect to `/data-deletion/`. `404.html`.
- `js/config.js` — `SITE_CONFIG`: Play Store URL, contact/deletion email, CTA text, copyright year. **Edit values here, not in each HTML file.**
- `js/script.js` — applies `SITE_CONFIG` to elements marked `data-link="play-store" | "deletion-email"` and `data-config="copyright-year" | "cta-text" | "privacy-email"`; scroll-reveal for `.reveal`. Keep the hardcoded HTML fallbacks valid: script failure must leave working links/copy.
- `css/styles.css` — all styles.

## Commands
- Preview locally: `python3 -m http.server 8080` (repo root) → http://localhost:8080
- Deploy: push to `main` (workflow auto-deploys). No tests, linters, or build.

## Critical rules
- Play Console points at `https://redastic.com/privacy/`, `/terms/`, `/data-deletion/`. Don't rename or move these paths; keep trailing-slash directory URLs.
- The API (`validator` repo, `app/main.py`) 301-redirects `api.redastic.com/privacy`, `/terms`, `/delete-account` to these pages. Changing paths here breaks those redirects.
- Legal copy must stay consistent with:
  - in-app copies `visualizer-android-app/app/src/main/assets/privacy.html` and `terms.html` (README: update these after changing privacy/deletion copy),
  - `visualizer-android-app/docs/play-data-safety.md` (Play Data safety answers).
  When editing policy text, say whether those were updated or still need to be.
- Account deletion: users delete in-app (Profile → Delete account) or by emailing the address in `SITE_CONFIG.privacyEmail`.

## Pitfalls
- Every file in the repo is published. Don't add drafts, notes, or private files.
- Pages are hand-written HTML with shared header/footer markup duplicated per page — a nav/footer change must be applied to every page.

## Done means
Change made, previewed locally if layout/JS changed (otherwise state it wasn't), list of files touched, and any app-side legal copy still needing sync.
