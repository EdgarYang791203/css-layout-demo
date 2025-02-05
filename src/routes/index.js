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

// 路由全局前置守卫
router.beforeEach((to, from, next) => {
  next();
});

// 路由全局后置守卫
router.afterEach((to, from, next) => {
  // console.log('路由全局后置守卫', to, from);
  next();
});

export default router;
