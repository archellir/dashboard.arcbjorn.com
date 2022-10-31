import type { FunctionalComponent } from "preact";
import type { IServiceItem } from "../../data/types";

export const ServiceListItem: FunctionalComponent<IServiceItem> = (props) => {
  return (
    <li class="border-t border-gray-400 py-4 px-2 list-none hover:border-transparent">
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        class="p-2 flex flex-col justify-start items-center gap-y-2 gap-x-4 group cursor-pointer"
      >
        <div>
          <h2 class="text-lg sm:text-xl tracking-tight font-plex-mono font-semibold group-hover:underline">
            {props.name}
          </h2>
          <p class="pt-1 font-plex-sans text-grey-600">{props.description}</p>
        </div>
        {props.monitorId && (
          <div class="flex justify-between items-center gap-2 w-full pt-2">
            <img
              width="60"
              src={`https://uptime.arcbjorn.com/api/badge/${props.monitorId}/status?upLabel=Online&downLabel=Offline&style=for-the-badge&logo=appveyor`}
            />
            <img
              width="100"
              src={`https://uptime.arcbjorn.com/api/badge/${props.monitorId}/uptime?label=24&labelSuffix=hours&style=for-the-badge&logo=appveyor`}
            />
          </div>
        )}
      </a>
    </li>
  );
};
