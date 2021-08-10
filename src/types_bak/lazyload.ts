import { ConstructorOptions } from "./options";

export interface loadImageAsyncOption {
  src: string;
  cors?: string;
}

export interface VueReactiveListener {
  el: Element;
  src: string;
  error: string;
  loading: string;
  bindType: string;
  attempt: number;
  naturalHeight: number;
  naturalWidth: number;
  options: ConstructorOptions;
  rect: DOMRect;
  $parent: Element;
  elRenderer: Function;
  performanceData: Performance;
}
