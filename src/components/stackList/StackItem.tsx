import type { FunctionalComponent } from "preact";
import type { IStackItem } from "@data/types";

export const StackListItem: FunctionalComponent<IStackItem> = (props) => {
  const { name, icon: Icon, url } = props;
  
  if (url) {
    return (
      <li class="flex justify-center items-center gap-2 text-sm sm:text-base">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex items-center gap-2 cursor-pointer group"
        >
          <Icon /> <span class="group-hover:underline">{name}</span>
        </a>
      </li>
    );
  }
  
  return (
    <li class="flex justify-center items-center gap-2 text-sm sm:text-base">
      <Icon /> {name}
    </li>
  );
};
