# Super Sparkles

Marketing website for a national window cleaning company. Built in React/Vite/Tailwind, deployed to Vercel. No backend — static site only.

**Live:** https://www.supersparkles.co.uk  
**Stack:** React 19 · Vite 8 · Tailwind 4

## Setup

```bash
npm install
npm run dev      # localhost:5173
npm run build    # production build to dist/
```

## Configuration

`src/App.jsx:4` — `APP_URL` points to the customer/cleaner app portal. Update this if the app URL changes:

```js
const APP_URL = 'https://app.supersparkles.co.uk'
```

## Deployment

Push to `main` → auto-deploys to Vercel. No environment variables required.

## Planned next phase

Separate web app with Xero + Stripe integration, staff/job scheduling, customer login, and cleaner login. See Big Orange Sky project tracker for status.
