import type { FunctionalComponent } from "preact";

export const Header: FunctionalComponent = () => {
  return (
    <div class="flex justify-between gap-4 flex-wrap p-12">
      <a
        href="https://arcbjorn.com"
        class="cursor-pointer font-bold text-xl font-plex-mono"
      >
        arcbjorn
      </a>
      <div class="flex gap-4">
        <h1 class="text-lg font-plex-sans">dashboard</h1>
      </div>
    </div>
  );
};
