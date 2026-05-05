# Gemini CLI Context: Portfolio Infrastructure

## Project Overview
This is a personal portfolio and professional infrastructure project for a Full Stack Engineer and Electronics & Computer Engineering (ECE) student. The goal is to showcase the bridge between **Hardware (Embedded, ESP32, C/C++)** and **Cloud SaaS (Next.js, PostgreSQL, Distributed Systems)**.

### Main Technologies
- **Framework:** Next.js 16 (App Router) with React 19.
- **Styling:** Tailwind CSS 4 (using the `@tailwindcss/postcss` plugin).
- **Database:** Neon Serverless Postgres (HTTP-based connection via `@neondatabase/serverless`).
- **ORM:** Drizzle ORM for type-safe database access and migrations.
- **Language:** TypeScript in Strict Mode.

---

## Building and Running

### Development
```bash
# Start the Next.js development server
npm run dev

# Open Drizzle Studio to explore the database
npx drizzle-kit studio
```

### Database Management
```bash
# Push schema changes to the Neon DB
npx drizzle-kit push

# Generate migrations (if needed)
npx drizzle-kit generate
```

### Production
```bash
# Build the application
npm run build

# Start the production server
npm run start
```

---

## Architecture & Data Flow
- **Server-First:** Strictly utilizes **React Server Components (RSCs)** for data fetching. Client-side state is minimized.
- **Database Schema (`src/db/schema.ts`):**
    - `projects`: Stores project metadata, category (`HARDWARE` or `CLOUD`), and a `jsonb` tech stack array.
    - `guestbook`: Simple visitor messaging system.
- **Filtering:** Employs URL-driven state (query parameters) for project filtering to maintain shareable links and SEO benefits.

---

## Development Conventions
- **Workflow:** Adhere to the **PLAN → BUILD → TEST → REVIEW** cycle. Architecture must be defined and approved before implementation begins.
- **UI/UX:** Technical, minimalist aesthetic using mono-spaced fonts (`Geist Mono`) and dark-mode defaults (`neutral-950`).
- **Data Fetching:** Fetch data directly in Server Components using the `db` instance from `@/db`.
- **Type Safety:** Maintain strict TypeScript definitions, especially for database results and component props.

---

## Key Files
- `src/db/schema.ts`: The source of truth for the database structure.
- `src/db/index.ts`: Database client initialization using Neon's HTTP driver.
- `src/app/page.tsx`: Main portfolio landing page with dynamic filtering logic.
- `drizzle.config.ts`: Configuration for Drizzle Kit and database credentials.
- `.ai/PROJECT_RULES.md`: Foundational engineering constraints and identity guidelines.
