import Vue from "vue";
import VueRouter from "vue-router";
import Menu from "../views/Menu.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Menu",
    component: Menu
  },
  {
    path: "/game",
    name: "Game",
    component: () => import("../views/Game.vue")
  },
  {
    path: "/options",
    name: "Options",
    component: () => import("../views/Options.vue")
  },
  {
    path: "/highscores",
    name: "High Scores",
    component: () => import("../views/HighScores.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
