import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
import Songs from "./components/Songs/Index.vue";
import CreateSong from "./components/CreateSong.vue";
import ViewSong from "./components/ViewSong/Index.vue";
import EditSong from "./components/EditSong.vue";

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
    },
    {
      path: "/songs/create",
      name: "songs-create",
      component: CreateSong
    },
    {
      path: "/songs/:songId",
      name: "song",
      component: ViewSong
    },
    {
      path: "/songs/:songId/edit",
      name: "song-edit",
      component: EditSong
    }
  ]
});
