import type { FunctionalComponent } from "preact";
import { stackItems } from "../../data/stackItems";
import { CPUIcon } from "../icons/CPUIcon";
import { RAMIcon } from "../icons/RAMIcon";
import { StackListItem } from "./StackItem";

export const StackList: FunctionalComponent = () => {
  return (
    <ul
      role="list"
      class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12"
    >
      {stackItems.map(({ name, icon }) => (
        <StackListItem name={name} icon={icon} />
      ))}
      <li class="flex justify-center items-center gap-2 col-span-2 sm:col-span-2 lg:col-span-1">
        <div class="flex flex-col items-center">
          <div class="pb-2">Server:</div>
          <div class="flex justify-center items-center gap-4">
            <div class="flex items-center gap-2">
              <CPUIcon />4 CPU
            </div>
            <div class="flex items-center gap-2">
              <RAMIcon />
              16.4 GB RAM
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};
