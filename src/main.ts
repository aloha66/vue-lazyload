import { createApp } from "vue";
import App from "./App.vue";
import VueLazyload from "./index";
// import VueLazyload from "../dist/index.esm.js";

createApp(App)
  .use(VueLazyload, {
    lazyComponent: true,
  })
  .mount("#app");
