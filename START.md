# SIGNAL — AI Intelligence for B2B SaaS

## Quick start

```bash
# Install dependencies (first time only)
npm install

# Start the server
npm start
# → open http://localhost:3000
```

## How it works

| File | Purpose |
|---|---|
| `server.js` | Express server + cron scheduler |
| `aggregator.js` | RSS feed fetcher + in-memory article cache |
| `feeds.js` | List of all RSS sources (add/remove here) |
| `seed-data.js` | Sample articles shown on first launch |
| `public/index.html` | Editorial homepage |
| `public/style.css` | Swiss grid + magazine spread design |
| `public/app.js` | Frontend — fetches API, renders layouts |

## Content schedule

Feeds refresh automatically every **Monday and Thursday at 7:00 AM CT**.

To trigger a manual refresh:
```bash
curl -X POST http://localhost:3000/api/refresh
```

## Adding / removing sources

Edit `feeds.js`. Each feed has:
- `url` — RSS feed URL
- `name` — Display name
- `category` — `general` | `saas` | `thought-leadership`
- `tags` — array of strings for filtering

## LinkedIn note

LinkedIn does not provide public RSS feeds and aggressively blocks scraping.
The recommended approach for LinkedIn content:
1. Use LinkedIn's official API with user OAuth (requires approval)
2. Manually curate key posts and add them via the `seed-data.js` file
3. Use a paid LinkedIn data provider (Proxycurl, etc.) and write a custom adapter in `aggregator.js`

## Deployment options

- **Fly.io / Railway / Render** — push the repo, set PORT env var, done
- **Vercel** — works with serverless adapter (remove cron, use Vercel Cron)
- **Self-hosted** — run `npm start` behind nginx, use cron or pm2 for scheduling
