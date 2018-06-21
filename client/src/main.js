import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { sync } from "vuex-router-sync";
import store from "./store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VueYouTubeEmbed from "vue-youtube-embed";

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueYouTubeEmbed);

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
