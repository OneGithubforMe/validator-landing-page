# Redastic Landing Page

A minimal, static landing page for [redastic.com](https://redastic.com) — verify anything on WhatsApp.

**Cost: $0/month** · GitHub Pages · No database · No backend

## What's on the page

- Hero with "Verify on WhatsApp" CTA
- Live WhatsApp chat demo (static mockup)
- What can I verify? (news, images, videos, forwards, etc.)
- How it works (4 steps)
- Example verification flow
- Recent verifications (manually curated, static)
- Why Redastic? (differentiator)
- FAQ
- Waitlist form (Google Forms — free, saves to Google Sheets)
- Coming soon: Chrome Extension, Instagram Extension, iPhone App, Android App, API

## Quick start

Open `index.html` in a browser, or serve locally:

```bash
python3 -m http.server 8080
# Visit http://localhost:8080
```

## Before you deploy

Edit **`js/config.js`** — all links and site variables live there:

```js
const SITE_CONFIG = {
  whatsappNumber: '919876543210',   // country code + number, no + or spaces
  whatsappMessage: 'Hi Redastic',
  googleFormUrl: 'https://docs.google.com/forms/d/e/.../viewform',
  siteUrl: 'https://redastic.com',
  // ...
};
```

| Variable | What it controls |
|----------|------------------|
| `whatsappNumber` | All "Verify on WhatsApp" buttons |
| `whatsappMessage` | Pre-filled text when opening WhatsApp |
| `ctaText` | Label on all WhatsApp CTA buttons |
| `googleFormUrl` | Waitlist / early access button link |
| `siteUrl` | Reference for SEO meta tags in `index.html` |
| `copyrightYear` | Footer year |

### Waitlist (Google Forms)

1. Create a form at [forms.google.com](https://forms.google.com)
2. Click **Send** → **Link** and copy the URL
3. Paste it as `googleFormUrl` in `js/config.js`

Responses save to Google Sheets automatically. No server, no database.

### 3. Update recent verifications

Edit the "Recent verifications" section in `index.html` manually every few days with real examples. Good for SEO and social proof.

## Deploy to GitHub Pages

### Option A: From the repo root (recommended)

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose `main` branch, `/ (root)` folder
5. Save

Your site will be live at `https://<username>.github.io/<repo>/` or at `redastic.com` once DNS is configured.

### Option B: GitHub Actions (automatic deploy on push)

The included workflow deploys on every push to `main`. Enable it under **Settings → Pages → Source → GitHub Actions**.

## Connect redastic.com (Cloudflare DNS)

1. In GitHub Pages settings, add `redastic.com` as a custom domain
2. In Cloudflare DNS for `redastic.com`, add:

| Type  | Name | Value                              |
|-------|------|------------------------------------|
| CNAME | @    | `<username>.github.io`             |
| CNAME | www  | `<username>.github.io`             |

3. Enable **Full (strict)** SSL in Cloudflare
4. The `CNAME` file in this repo already points to `redastic.com`

## Analytics (free, no backend)

Add one of these to `index.html` before `</head>`:

**Cloudflare Web Analytics** (recommended — privacy-friendly, free):

```html
<script defer src='https://static.cloudflareinsights.com/beacon.min.js'
  data-cf-beacon='{"token": "YOUR_TOKEN"}'></script>
```

Get your token at [dash.cloudflare.com](https://dash.cloudflare.com) → Web Analytics.

## Architecture

```
redastic.com (Cloudflare DNS)
        ↓
GitHub Pages (static HTML/CSS/JS)
        ↓
"Verify on WhatsApp" button → wa.me link
        ↓
WhatsApp Bot (your backend, separate)
```

No login. No dashboard. No database. No API on the landing page.

## Future: redastic.com/verify

When you're ready, add a `/verify` page for paste-and-verify. The landing page design stays the same — just add `verify/index.html`.

## License

Private — Redastic © 2026
