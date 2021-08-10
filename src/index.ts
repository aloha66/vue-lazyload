import Lazy from "./lazy";
import LazyComponent from "./lazy-component";
import LazyContainer from "./lazy-container";
import LazyImage from "./lazy-image";
import { VueLazyloadOptions } from "./types/lazyload";
import { App, isVue2 } from "vue-demi";

export default {
  /*
   * install function
   * @param  {Vue} Vue
   * @param  {object} options lazyload options
   */
  install(Vue: App, options: VueLazyloadOptions = {}) {
    const lazy = new Lazy(options);
    const lazyContainer = new LazyContainer(lazy);

    // Vue.config.globalProperties.$Lazyload = lazy;
    if (isVue2) {
      console.log("Vue", Vue, Vue.config.globalProperties);
      Object.defineProperties(Vue, {
        $Lazyload: {
          get: function () {
            return lazy;
          },
        },
      });

      // @ts-expect-error
      Vue.prototype.$Lazyload = lazy;
    }

    if (options.lazyComponent) {
      Vue.component("lazy-component", LazyComponent(lazy));
    }

    if (options.lazyImage) {
      Vue.component("lazy-image", LazyImage(lazy));
    }

    Vue.directive("lazy", {
      beforeMount: lazy.add.bind(lazy),
      beforeUpdate: lazy.update.bind(lazy),
      updated: lazy.lazyLoadHandler.bind(lazy),
      unmounted: lazy.remove.bind(lazy),
    });
    Vue.directive("lazy-container", {
      beforeMount: lazyContainer.bind.bind(lazyContainer),
      updated: lazyContainer.update.bind(lazyContainer),
      unmounted: lazyContainer.unbind.bind(lazyContainer),
    });
  },
};
