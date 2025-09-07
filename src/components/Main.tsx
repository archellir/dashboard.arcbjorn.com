import type { FunctionalComponent } from "preact";
import { personal, tools, projects } from "@data/services";
import { ServiceList } from "@components/serviceList/ServiceList";
import { StackList } from "@components/stackList/StackList";

export const Main: FunctionalComponent = () => {
  return (
    <>
      <div class="self-center text-center px-0 py-8 sm:px-6 sm:py-10 max-w-screen-lg text-sm sm:text-base lg:border-x border-t border-dashed border-gray-400">
        Building and learning brings me a lot of joy, therefore I maintain a
        suite of apps, developing new ones and experimenting with system
        architecture from time to time.
      </div>

      {/* Personal */}
      <div class="self-center text-center px-2 py-6 sm:px-4 sm:py-8 pt-12 sm:pt-16 max-w-screen-xl text-sm sm:text-base border-t border-dashed border-gray-400">
        <ServiceList services={personal} />
      </div>

      {/* Tools */}
      <div class="self-center text-center px-2 py-6 sm:px-4 sm:py-8 max-w-screen-xl text-sm sm:text-base border-t border-dashed border-gray-400">
        <div class="pb-8 text-lg font-semibold">Tools:</div>
        <ServiceList services={tools} />
      </div>

      {/* Products & Services */}
      <div class="self-center text-center px-2 py-6 sm:px-4 sm:py-8 max-w-screen-xl text-sm sm:text-base border-t border-dashed border-gray-400">
        <div class="pb-8 text-lg font-semibold">Projects:</div>
        <ServiceList services={projects} />
      </div>

      {/* DevOps stack */}
      <div class="self-center text-center px-2 py-6 sm:px-4 sm:py-8 max-w-screen-lg text-sm sm:text-base border-t border-dashed border-gray-400">
        <div class="pb-8 text-lg font-semibold">Current stack:</div>
        <StackList />
      </div>
    </>
  );
};
