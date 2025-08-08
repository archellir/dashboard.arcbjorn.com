import type { FunctionalComponent } from "preact";
import type { IStackItem } from "../../data/types";

export const StackListItem: FunctionalComponent<IStackItem> = (props) => {
  const { name, icon: Icon } = props;
  return (
    <li class="flex justify-center items-center gap-2 text-sm sm:text-base">
      <Icon /> {name}
    </li>
  );
};
