import type { FunctionalComponent } from "preact";
import type { IServiceItem } from "../../data/types";
import { ServiceListItem } from "./ServiceItem";

interface IServiceListProps {
  services: IServiceItem[];
}

export const ServiceList: FunctionalComponent<IServiceListProps> = (props) => {
  return (
    <ul
      role="list"
      class="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-8 lg:gap-12"
    >
      {props.services.map(({ name, description, url, monitorId }) => (
        <div class="border border-transparent hover:border-gray-400 hover:border-dashed hover:border">
          <ServiceListItem
            name={name}
            description={description}
            url={url}
            monitorId={monitorId}
          />
        </div>
      ))}
    </ul>
  );
};
