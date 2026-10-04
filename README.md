# NeuroNotes Website

Website for NeuroNotes at UCSB, built with Next.js, TypeScript, and Tailwind CSS.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Editing content

- `lib/site.ts`: club description, logo path, social links
- `lib/info.ts`: important info cards (next meeting, upcoming event, announcements)
- `lib/events.ts`: event cards
- `lib/officers.ts`: officer names, roles, photos
- `public/images/`: put images here and reference them as `/images/your-file.jpg`
- `tailwind.config.ts`: site colors and fonts

## Deploying

Import the repo on Vercel; it detects Next.js automatically.

## Contact form

The Contact Us form sends messages to neuronotesorg@gmail.com through Gmail.
It needs two environment variables (see `.env.local.example`):

- `GMAIL_USER`: neuronotesorg@gmail.com
- `GMAIL_APP_PASSWORD`: a Gmail App Password from https://myaccount.google.com/apppasswords (requires 2-Step Verification)

Locally, put them in `.env.local`. On Vercel, add them under Project Settings → Environment Variables.
Until they're set, the form shows an error asking people to email directly.
