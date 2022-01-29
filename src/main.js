import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import UI from "@/components/UI";

const app = createApp(App);
app.use(store);
app.use(router);
UI.forEach((component) => {
  app.component(component.name, component);
});
app.mount("#app");
