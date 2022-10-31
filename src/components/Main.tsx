import type { FunctionalComponent } from "preact";
import { externalServices, internalServices } from "../data/services";
import { ServiceList } from "./serviceList/ServiceList";
import { StackList } from "./stackList/StackList";

export const Main: FunctionalComponent = () => {
  return (
    <>
      <div class="self-center text-center p-8 max-w-screen-lg text-sm sm:text-base lg:border-x border-t border-dashed border-gray-400">
        Building and learning brings me a lot of joy, therefore I maintain a
        suite of apps, developing new ones and experimenting with system
        architecture from time to time.
      </div>

      {/* External Services */}
      <div class="self-center text-center p-8 max-w-screen-xl text-sm sm:text-base border-t border-dashed border-gray-400">
        <div class="pb-8 text-lg font-semibold">Public services:</div>
        <ServiceList services={externalServices} />
      </div>

      {/* Internal Services */}
      <div class="self-center text-center p-8 max-w-screen-xl text-sm sm:text-base border-t border-dashed border-gray-400">
        <div class="pb-8 text-lg font-semibold">Internal services:</div>
        <ServiceList services={internalServices} />
      </div>

      {/* DevOps stack */}
      <div class="self-center text-center p-8 max-w-screen-lg text-sm sm:text-base border-t border-dashed border-gray-400">
        <div class="pb-8 text-lg font-semibold">Current stack:</div>
        <StackList />
      </div>
    </>
  );
};
