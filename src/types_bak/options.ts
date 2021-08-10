interface IntersectionObserverInit {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

interface Options {
  lazyComponent: boolean;
  lazyImage: boolean;
  preLoad: number;
  error: string;
  loading: string;
  cors: string;
  attempt: number;
  listenEvents: string[];
  supportWebp: boolean;
  adapter: any;
  filter: any;
  dispatchEvent: boolean;
  throttleWait: number;
  observer: boolean;
  observerOptions: IntersectionObserverInit;
  silent: boolean;
  preLoadTop: number;
  scale: number;
}

export type ConstructorOptions = Partial<Options>;
