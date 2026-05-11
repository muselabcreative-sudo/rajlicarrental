# Rajli Car Rental — Website

Premium static car-rental site for **Rajli Car Rental** (Tirana, Albania).
Auto-discovers your fleet from the project's folder structure — no manual car list anywhere.

---

## How it works

```
RajliCarRental/
├── assets/
│   ├── LOGO.jpeg          ← used as logo + favicon
│   └── Background.PNG     ← fullscreen hero background
├── Audi A6/               ← one folder = one car
│   ├── Audi A6.main.PNG   ← main image (any file with "main" in the name)
│   ├── Gallery/           ← additional photos
│   └── description.txt    ← Name / Year / Transmission / Engine
├── Hyundai Tucson/
├── ...
├── cars.json              ← generated manifest (do not edit by hand)
├── generate-cars.js       ← rebuild cars.json after changes
├── index.html             ← homepage
├── car.html               ← car detail page
├── styles.css
└── app.js
```

## Adding / changing cars

1. Drop a new folder at the project root, e.g. `Mercedes C-Class/`.
2. Inside it, add:
   - a main image — any image whose name contains `main` (e.g. `mercedes.main.jpg`)
   - a `Gallery/` folder with additional `.jpg`/`.png`/`.webp` photos
   - a `description.txt` with the same format as the others
3. Re-run the generator:

```bash
node generate-cars.js
```

That rewrites `cars.json`. Reload the site — your new car shows up in the fleet automatically.

## Preview locally

The site uses `fetch("cars.json")`, which doesn't work from `file://`.
Run any tiny static server from this folder:

```bash
# Python (already installed on macOS)
python3 -m http.server 8000

# or with Node
npx serve .
```

Then open <http://localhost:8000>.

## Deploying to Vercel

The site is pure static HTML/CSS/JS — Vercel doesn't need to build anything.

### Option A — Vercel CLI (fastest)

One-time setup:

```bash
npm install -g vercel
```

From inside this folder:

```bash
cd "/Users/roni/Projects/RajliCarRental"
vercel login          # opens browser, sign in once
vercel                # preview deploy → gives you a *.vercel.app URL
vercel --prod         # promote to production when you're happy
```

Vercel will prompt: *"Set up and deploy?"* → **Y**. *"Which scope?"* → pick your account. *"Link to existing project?"* → **N**. *"Project name?"* → `rajli-car-rental` (or whatever). *"Directory?"* → just press enter (`./`). *"Override settings?"* → **N**.

Subsequent deploys are just `vercel --prod` from this folder.

### Option B — Drag & drop (no terminal)

1. Open <https://vercel.com/new>
2. Sign in (GitHub / Google / email).
3. Drag the `RajliCarRental` folder onto the page.
4. Click **Deploy**.

### Option C — Connect a Git repo (best for ongoing changes)

```bash
cd "/Users/roni/Projects/RajliCarRental"
git init
git add .
git commit -m "Initial site"
gh repo create rajli-car-rental --public --source=. --push   # if you have GitHub CLI
# or push to a repo you create manually on github.com
```

Then on <https://vercel.com/new> → **Import Git Repository** → pick the repo → **Deploy**. Every `git push` after that triggers an auto-deploy.

### After deploy: custom domain

In the Vercel dashboard → Project → **Settings → Domains** → add `rajlicarrental.com` (or whatever you own). Vercel shows the DNS records to point at — usually one `A` record (`76.76.21.21`) and/or a `CNAME` (`cname.vercel-dns.com`). Done.

### What's excluded from the deploy

`.vercelignore` removes from upload: `.DNG` camera RAW files (~500 MB, browsers can't display them), `.DS_Store`, `node_modules`, `generate-cars.js` (only used locally), and `README.md`.

### Performance note

Several main images are 10–27 MB. Vercel deploys them fine and the included `vercel.json` caches them aggressively (1-year immutable cache), but **first-load** on mobile data will be slow. Run them through [Squoosh](https://squoosh.app) (target ~300 KB each at 1600 px wide, WebP or compressed JPEG) and the site becomes much snappier.

---

## Deploying elsewhere

Drag the folder onto **Netlify**, **Cloudflare Pages**, or any static host. No build step required.

## Things to know

- **WhatsApp number** is hard-coded as `+355688208884` in `app.js` (constant `PHONE_RAW`). Change it there if it ever changes.
- **Google Maps embed** in `index.html` currently points to "Tirana International Airport" as a generic location — replace the `iframe src` with your exact embed URL when ready (the share link `https://maps.app.goo.gl/9d3s4gE7QWjXXkFM6?g_st=ic` is also linked from the contact card).
- **Image performance:** several main images are 10–25 MB. Consider compressing them (e.g. via [Squoosh](https://squoosh.app)) to keep the site fast on mobile data.
- **Camera RAW (`.DNG`) files** in `Toyota Yaris/Gallery` and `Volkswagen Golf VII 2015/Gallery` are skipped automatically — browsers can't render them. Add JPG/PNG copies to make those galleries fuller.

---

**Slogan:** *Partneri yt në çdo udhëtim.*
**Phone / WhatsApp:** +355 68 820 8884
