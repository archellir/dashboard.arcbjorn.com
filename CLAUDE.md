# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` or `npm start` (localhost:3000)
- **Build**: `npm run build` (outputs to `./dist/`)
- **Preview**: `npm run preview` (preview production build locally)
- **Deploy**: `npm run deployBuild` (builds and deploys to gh-pages main branch)
- **Linting**: `eslint` is configured but no lint script defined in package.json
- **Dependencies**: Uses `pnpm` as package manager (pnpm-lock.yaml present)

## Architecture Overview

This is an Astro-based dashboard application displaying infrastructure services and tech stack information.

### Core Technologies
- **Astro**: Static site generator with component islands architecture
- **Preact**: Used for interactive components (Header, Main, Footer, service lists)
- **TypeScript**: Fully typed codebase
- **Tailwind CSS**: Utility-first styling with custom base styles disabled

### Project Structure
- `src/components/`: Preact components for UI elements
  - Service and stack item display components
  - Icon components for various technologies
- `src/data/`: TypeScript data files defining services and types
  - `services.ts`: External and internal service definitions
  - `types.ts`: Interface definitions for services and stack items
- `src/layouts/`: Astro layout components
- `src/pages/`: Astro pages (file-based routing)

### Data Architecture
The application displays two categories of services:
- **External services**: Public-facing applications (blog, personal website, etc.)
- **Internal services**: Infrastructure tools (monitoring, database interfaces, etc.)

Each service has optional monitoring integration via `monitorId` and can include URLs and descriptions.

### Component Patterns
- Uses Preact functional components with TypeScript interfaces
- Icon components are functional components passed as props
- Service lists render from centralized data files
- Astro components handle layout and page structure

### Styling Approach
- Tailwind CSS with custom base styles disabled (configured in astro.config.mjs)
- Custom fonts: IBM Plex Sans and IBM Plex Mono
- Responsive design with utility classes