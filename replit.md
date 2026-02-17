# Gordon's Bay Gas - Professional Gas Installation Website

## Overview

This is a professional business website for "Gordon's Bay Gas (PTY) LTD," a gas installation company located in Gordon's Bay, Cape Town. The site serves as a marketing and lead-generation tool, showcasing services (gas installations, compliance certificates, electrical, plumbing, pest control), displaying testimonials, and collecting customer inquiries through a quote request form. The architecture is a full-stack TypeScript application with a React frontend and Express backend, though the core purpose is essentially a brochure/lead-gen website with a contact form that persists inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) with pages: Home, Services, About, Contact, and 404
- **Styling**: Tailwind CSS with CSS variables for theming, using shadcn/ui component library (new-york style). Custom fonts: Outfit (display) and Plus Jakarta Sans (body) loaded via Google Fonts
- **Animations**: Framer Motion for scroll-reveal and page animations
- **Smooth Scrolling**: react-scroll for in-page navigation links
- **State Management**: TanStack React Query for server state (inquiry submissions)
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers
- **UI Components**: Full shadcn/ui component library installed in `client/src/components/ui/`
- **Icons**: Lucide React
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend
- **Framework**: Express 5 on Node.js with TypeScript (run via tsx)
- **API**: Single REST endpoint `POST /api/inquiries` for submitting contact/quote requests
- **Storage**: Currently uses in-memory storage (`MemStorage` class) — not persisting to database yet. The interface `IStorage` is defined for easy swap to database-backed storage
- **Schema**: Drizzle ORM schema defined in `shared/schema.ts` with PostgreSQL dialect configured in `drizzle.config.ts`. The `inquiries` table has fields: id, name, email, service, message, createdAt
- **Validation**: Zod schemas generated from Drizzle schema via `drizzle-zod`, shared between client and server
- **Dev Server**: Vite dev server is integrated as middleware in development mode with HMR
- **Production Build**: Client built with Vite, server bundled with esbuild into `dist/` directory. Server serves static files from `dist/public/`

### Shared Code (`shared/`)
- `schema.ts`: Drizzle table definitions and Zod insert schemas — single source of truth for data types used by both frontend and backend
- `routes.ts`: API contract definitions with method, path, input schema, and response schemas — provides type-safe API interactions

### Key Design Decisions
1. **Monorepo structure** with `client/`, `server/`, and `shared/` directories — keeps frontend and backend in one codebase with shared types
2. **In-memory storage with database-ready schema** — Drizzle schema is defined for PostgreSQL but storage currently uses a Map. When a database is provisioned, switch `MemStorage` to use Drizzle queries with `DATABASE_URL`
3. **Schema-first validation** — Zod schemas derived from Drizzle table definitions ensure consistent validation across client forms and server endpoints
4. **Static-first design** — The site is primarily a marketing website; the only dynamic feature is the inquiry form submission

## External Dependencies

### Database
- **PostgreSQL** (configured but not yet connected for runtime storage): Drizzle ORM with `drizzle-kit` for migrations. Schema push via `npm run db:push`. Requires `DATABASE_URL` environment variable
- **connect-pg-simple**: Session store dependency (available but sessions not currently used)

### Key NPM Packages
- **Frontend**: react, react-dom, wouter, @tanstack/react-query, framer-motion, react-scroll, react-hook-form, zod, lucide-react, tailwindcss, shadcn/ui (via Radix primitives), recharts, embla-carousel-react, vaul, react-day-picker, react-resizable-panels, input-otp, cmdk
- **Backend**: express v5, drizzle-orm, drizzle-zod, nanoid, pg
- **Build tools**: vite, esbuild, tsx, typescript, drizzle-kit
- **Replit plugins**: @replit/vite-plugin-runtime-error-modal, @replit/vite-plugin-cartographer, @replit/vite-plugin-dev-banner

### External Services
- **Google Fonts**: Outfit, Plus Jakarta Sans, DM Sans, Fira Code, Geist Mono loaded via CDN
- **Unsplash**: Stock images referenced via URL in component code
- No authentication, no payment processing, no email sending currently configured