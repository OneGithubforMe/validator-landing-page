# Visualizer — redastic.com

Static marketing and legal site for [Visualizer](https://play.google.com/store/apps/details?id=com.visualizer.app), the Android app from Redastic.

**Cost: $0/month** · GitHub Pages · No database · No backend

## Pages

| URL | Purpose |
|-----|---------|
| `/` | Product homepage |
| `/privacy/` | Privacy policy (Play Console) |
| `/data-deletion/` | Account deletion instructions (Play Console) |
| `/delete-account/` | Alias → `/data-deletion/` |
| `/terms/` | Terms of Use |

Edit **`js/config.js`** for Play Store URL, deletion email, and CTA label.

## Play Console URLs

```
https://redastic.com/privacy/
https://redastic.com/terms/
https://redastic.com/data-deletion/
```

After changing privacy or deletion copy, deploy this repo, then update the same text in `visualizer-android-app/app/src/main/assets/privacy.html` if the in-app sheet should match.

## Quick start

```bash
python3 -m http.server 8080
# Visit http://localhost:8080
```

## Deploy to GitHub Pages

1. Repo **Settings → Pages → Source → GitHub Actions** (one-time)
2. Push `main`. The workflow deploys automatically.
3. Custom domain: `CNAME` is `redastic.com`

## Architecture

```
redastic.com (GitHub Pages)
        ↓
Visualizer product + legal pages
        ↓
Google Play listing  ·  api.redastic.com (app backend only)
```

Legal HTML no longer lives on the API. `api.redastic.com/privacy` and `/delete-account` should redirect here.

## License

Private — Redastic © 2026
