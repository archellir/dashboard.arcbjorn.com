import type { FunctionalComponent } from "preact";
import { stackItems } from "../../data/stackItems";
import { CPUIcon } from "../icons/CPUIcon";
import { RAMIcon } from "../icons/RAMIcon";
import { StackListItem } from "./StackItem";

export const StackList: FunctionalComponent = () => {
  return (
    <ul
      role="list"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
    >
      {stackItems.map(({ name, icon }) => (
        <StackListItem name={name} icon={icon} />
      ))}
      <li class="flex-col items-center justify-center">
        <div class="pb-2">Server:</div>
        <div class="flex justify-around items-center gap-2">
          <div class="flex items-center gap-2">
            <CPUIcon />4 CPU
          </div>
          <div class="flex items-center gap-2">
            <RAMIcon />
            16.4 GB RAM
          </div>
        </div>
      </li>
    </ul>
  );
};
