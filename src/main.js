import { createApp } from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

const routes = [{ path: "/", component: App }];

const router = new VueRouter({
  routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");
