import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faMapMarkedAlt,
  faEnvelope,
  faPhone,
  faBars,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";

library.add(faMapMarkedAlt, faEnvelope, faPhone, faBars, faTimesCircle);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
