import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { sync } from "vuex-router-sync";
import store from "./store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VueYouTubeEmbed from "vue-youtube-embed";
import Panel from "@/components/globals/Panel";

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueYouTubeEmbed);

// Setting global component for Panel
Vue.component("panel", Panel);

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
