import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",

      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/details/:id",
      name: "respodetails",

      component: () => import("../views/RespositoryDetailsPage.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "notfound",

      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
