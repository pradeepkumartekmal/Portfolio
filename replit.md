# Pradeep Kumar - Data Engineer Portfolio

A personal portfolio website for Pradeep Kumar, a Data Engineer. Originally built with Lovable, migrated to Replit.

## Architecture

- **Frontend**: React + TypeScript + Vite (port 5000)
- **Backend**: Express.js API server (port 3001)
- **Styling**: Tailwind CSS + shadcn/ui components + Framer Motion animations

## Project Structure

```
src/
  components/   - All React UI components (Hero, About, Projects, Contact, etc.)
  pages/        - Page-level components (Index, NotFound)
  hooks/        - Custom React hooks
  lib/          - Utility functions
server/
  index.ts      - Express API server with /api/contact route
public/         - Static assets
```

## Key Features

- Animated portfolio sections (Hero, Stats, About, Resume/Experience, Skills, Projects, Testimonials)
- Contact form that submits to `/api/contact` (Express backend)
- Appointment modal
- Responsive design with dark theme

## Running

The workflow "Start application" runs both servers concurrently:
- `npx tsx server/index.ts` — API server on port 3001
- `npx vite --port 5000 --host 0.0.0.0` — Vite dev server on port 5000

Vite proxies `/api/*` requests to the Express server.

## Email (Contact Form)

The contact form sends via `/api/contact`. To enable real emails, set the `RESEND_API_KEY` environment variable (uses Resend API). Without it, submissions are logged to console.

## Migration Notes

- Removed Supabase (was used only for email Edge Function)
- Replaced with Express `/api/contact` route in `server/index.ts`
- Removed `lovable-tagger` from Vite config
