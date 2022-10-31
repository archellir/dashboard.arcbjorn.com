import type { IServiceItem } from "./types";

export const externalServices: IServiceItem[] = [
  {
    name: "Blog",
    description: "Built with Deno, Fresh, Preact, TS",
    url: "https://blog.arcbjorn.com",
    monitorId: 2,
  },
  {
    name: "Personal website",
    description: "Build with Gatsby.js, GraphQL, TS",
    url: "https://arcbjorn.com",
    monitorId: 8,
  },
  {
    name: "Tax calculator",
    description: "Build with Vue 3, Pinia, TS",
    url: "https://tax.arcbjorn.com",
    monitorId: 3,
  },
  {
    name: "Git server",
    description: "built on Gitea",
    url: "https://git.arcbjorn.com/explore/repos",
    monitorId: 4,
  },
  {
    name: "This dashboard",
    description: "Built with Astro, Preact, TS",
    url: "/",
    monitorId: 9,
  },
  {
    name: "Web monitoring",
    description: "built on Uptime-kuma",
    url: "https://uptime.arcbjorn.com/status",
  },
];

export const internalServices: IServiceItem[] = [
  {
    name: "Service Logger",
    description: "built on Dozzle",
    url: "https://dozzle.dev/",
    monitorId: 11,
  },
  {
    name: "Company website",
    description: "built with SvelteKit, TS",
    url: "/",
    monitorId: 10,
  },
  {
    name: "Analytics dashboard",
    description: "built on Umami",
    url: "https://umami.is/",
    monitorId: 7,
  },
  {
    name: "Database interface",
    description: "built on pgAdmin",
    url: "https://www.pgadmin.org/",
    monitorId: 6,
  },
  {
    name: "Server infrastructure",
    description: "built on Portainer",
    url: "https://www.portainer.io/",
    monitorId: 5,
  },
  {
    name: "Server web interface",
    description: "built on FileBrowser",
    url: "https://filebrowser.org/",
    monitorId: 1,
  },
];
