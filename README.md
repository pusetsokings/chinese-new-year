# Barloworld Equipment · Lunar New Year Greetings

A corporate digital red envelope (红包) for Barloworld Equipment to send Lunar New Year wishes to Chinese partners. Professional, self-contained, and designed to pass through corporate email and firewall restrictions.

## Features

- **No external dependencies at runtime** — All assets inline; no blocked URLs
- **Corporate branding** — Barloworld Equipment logo and messaging
- **Mobile-friendly** — Responsive design for all devices
- **Simple distribution** — Static build works anywhere

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Distribution

```bash
npm run build
```

The `dist/` folder contains a static site. Share it by:

1. **GitHub Pages** — Push to `main`; the workflow deploys automatically. Enable Pages: Settings → Pages → Source: GitHub Actions
2. **Internal server** — Upload `dist/` to any web server; share the URL
3. **Zip & send** — Zip the `dist/` folder; recipients can open `index.html` locally

**Corporate-friendly**: No external URLs, no CDNs. Works behind firewalls.

## Customisation

- **Logo**: Replace `public/logo.svg` with the official Barloworld Equipment logo (PNG/SVG)
- **Video**: The "Watch the Message" button currently shows a placeholder. Integrate your video URL when ready.

## Technical Notes

- Uses relative paths (`base: './'`) for maximum portability
- No external CDNs or third-party scripts
- Works offline once loaded
