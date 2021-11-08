import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/main.scss";

const app = createApp(App);

const components = import.meta.globEager("./components/base/Base*.vue");

Object.entries(components).forEach(([path, definition]) => {
    const componentName = path
        .split("/")
        .pop()
        .replace(/\.\w+$/, "");
    app.component(componentName, definition.default);
});

app.use(router);

app.mount("#app");
