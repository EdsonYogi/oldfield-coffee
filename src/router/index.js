import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/sobre",
    name: "sobre",
    component: () => import("../views/Sobre.vue")
  },
  {
    path: "/cardapio",
    name: "cardapio",
    component: () => import("../views/Cardapio.vue")
  },
  {
    path: "/contato",
    name: "contato",
    component: () => import("../views/Contato.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 });
      }, 500);
    });
  }
});

export default router;
