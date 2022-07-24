// build-in
import { createApp } from "vue";
// import { createRouter, createWebHistory, RouterLink } from "vue-router";
// import VueRouter from "vue-router";
import Vue from "vue";
import App from "./App.vue";

// router
import "./registerServiceWorker";
import router from "./router";

// fontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);

// iconify
import Iconify from "@iconify/iconify";

// jQuery
import $ from "jquery";
import "jquery-ui";

// bootstrap
import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// utils
import {createStore} from 'vuex'
import store from "./store";

// token
import authHeader from "./auth/auth.header";

// axios
import VueAxios from "vue-axios";
import interceptor from "./interceptor/axios.js";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(store)
  .use(VueAxios, interceptor)
  .mount("#app");
