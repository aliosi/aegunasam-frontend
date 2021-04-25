import Vue from "vue";
import Router from "vue-router";
import { authGuard } from "./auth/authGuard";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      beforeEnter: authGuard,
      redirect: "/dashboard",
      component: () => import("@/view/layout/Layout"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@/view/pages/Dashboard.vue"),
          beforeEnter: authGuard
        },
        {
          path: "/profile",
          beforeEnter: authGuard,
          name: "profile",
          component: () => import("@/view/pages/profile/Profile-2.vue"),
          children: [
            {
              path: "profile-2",
              name: "profile-2",
              beforeEnter: authGuard,
              component: () => import("@/view/pages/profile/Profile-2")
            }
          ]
        }
      ]
    },
    {
      path: "/custom-error",
      name: "error",
      component: () => import("@/view/pages/error/Error.vue"),
      children: [
        {
          path: "error-6",
          name: "error-6",
          beforeEnter: authGuard,
          component: () => import("@/view/pages/error/Error-6.vue")
        }
      ]
    },
    // {
    //   path: "/",
    //   component: () => import("@/view/pages/auth/login_pages/Login-1"),
    //   children: [
    //     {
    //       name: "login",
    //       path: "/login",
    //       component: () => import("@/view/pages/auth/login_pages/Login-1")
    //     },
    //     {
    //       name: "register",
    //       path: "/register",
    //       component: () => import("@/view/pages/auth/login_pages/Login-1")
    //     }
    //   ]
    // },
    {
      path: "*",
      redirect: "/404"
    },
    {
      // the 404 route, when none of the above matches
      path: "/404",
      name: "404",
      component: () => import("@/view/pages/error/Error-6.vue")
    }
  ]
});
