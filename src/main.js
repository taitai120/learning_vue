import { createApp } from "vue";
import App from "@/App.vue";
import "./assets/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import router from "./router";
import store from "@/store";

library.add(faSearch);

const app = createApp(App).use(store);

app.use(router).component("FontAwesomeIcon", FontAwesomeIcon).mount("#app");
