import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
import Songs from "./components/Songs.vue";

Vue.use(Router);

// This is where you create your routes

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/songs",
      name: "songs",
      component: Songs
    }
  ]
});
