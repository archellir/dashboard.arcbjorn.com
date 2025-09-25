# Infrastructure Dashboard

Astro-based dashboard application displaying infrastructure services and tech stack information.

## Technologies

- **Astro**: Static site generator with component islands architecture
- **Preact**: Used for interactive components
- **TypeScript**: Fully typed codebase
- **Tailwind CSS**: Utility-first styling

## Development

### Commands
- `pnpm dev` or `pnpm start` - Start development server (localhost:3000)
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm deployBuild` - Build and deploy to gh-pages main branch

### Package Management
Uses `pnpm` as the package manager.

## Project Structure

```
src/
├── components/    # Preact components for UI elements
├── data/         # TypeScript data files (services, types)
├── layouts/      # Astro layout components
└── pages/        # Astro pages (file-based routing)
```

## Features

- Displays external and internal infrastructure services
- Service monitoring integration
- Technology stack overview
- Responsive design with custom typography (IBM Plex Sans/Mono)
