import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Demo",
    component: () => import("../views/Demo.vue"),
    meta: { title: "Demo" },
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: { title: "Home" },
  },
];

const router = createRouter({
  history: createWebHistory(
    import.meta.env.NODE_ENV === "production" ? "/css-layout-demo/" : "/"
  ),
  routes,
});

router.afterEach((to, from) => {
  // 此處可以做一些後置處理，但不需要調用 next()
});

export default router;
