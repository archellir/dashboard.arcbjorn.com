import type { FunctionalComponent } from "preact";

export interface IStackItem {
  name: string;
  icon: FunctionalComponent;
}

export interface IServiceItem {
  name: string;
  description: string;
  url?: string;
  monitorId?: number;
}
