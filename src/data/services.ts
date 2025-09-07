import type { IServiceItem } from "./types";

export const personal: IServiceItem[] = [
  {
    name: "Personal website",
    description: "SolidJS, TailwindCSS, TS",
    url: "https://arcbjorn.com",
    monitorId: 9,
  },
  {
    name: "Blog",
    description: "Deno, Fresh, Preact, TS",
    url: "https://blog.arcbjorn.com",
    monitorId: 11,
  },
  {
    name: "This dashboard",
    description: "Astro, Preact, TS",
    url: "/",
    monitorId: 4,
  },
];

export const tools: IServiceItem[] = [
  {
    name: "Tax calculator",
    description: "Vue 3, Pinia, TS, TailwindCSS",
    url: "https://tax.arcbjorn.com",
    monitorId: 10,
  },
  {
    name: "Git platform",
    description: "built on Gitea",
    url: "https://git.arcbjorn.com/explore/repos",
    monitorId: 5,
  },
  {
    name: "Web monitoring",
    description: "built on Uptime-kuma",
    url: "https://uptime.arcbjorn.com/status",
  },
  {
    name: "Analytics dashboard",
    description: "built on Umami",
    url: "https://umami.is/",
    monitorId: 6,
  },
  {
    name: "Notes storage",
    description: "built on Memos",
    url: "https://www.usememos.com/",
    monitorId: 7,
  },
  {
    name: "Server web interface",
    description: "built on FileBrowser",
    url: "https://filebrowser.org/",
    monitorId: 8,
  },
];

export const projects: IServiceItem[] = [
  {
    name: "ArkyDev",
    description: "SvelteKit, TS, TailwindCSS",
    url: "https://arkydev.com/",
    monitorId: 10,
  },
  {
    name: "Argentinaa music",
    description: "SvelteKit, TS, TailwindCSS",
    url: "http://argentinamusic.space/",
    monitorId: 3,
  },

  {
    name: "Humans Connect AI",
    description: "SvelteKit, TS, TailwindCSS",
    url: "https://humansconnect.ai/",
    monitorId: 1,
  },
];
