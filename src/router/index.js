import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Companys from "../views/Companys.vue";
import Orders from "../views/Orders.vue";
import Catalog from "../views/Catalog.vue";
import Profile from "../views/Profile.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      layout: "AuthLayout",
    },
  },
  {
    path: "/registration",
    name: "Registration",
    component: () => import("../views/Registration.vue"),
    meta: {
      layout: "AuthLayout",
    },
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      auth: true,
      layout: "MainLayout",
    },
  },
  {
    path: "/companys",
    name: "Companys",
    component: Companys,
    meta: {
      auth: true,
      layout: "MainLayout",
    },
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
    meta: {
      auth: true,
      layout: "MainLayout",
    },
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: Catalog,
    meta: {
      auth: true,
      layout: "MainLayout",
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      auth: true,
      layout: "MainLayout",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    meta: {
      layout: "NotFoundLayout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isToken = localStorage.getItem("jwtAccessToken");
  const requireAuth = to.matched.some((record) => record.meta.auth);
  if (requireAuth && !isToken) {
    next("/login");
  } else if (!requireAuth && isToken) {
    next("/");
  } else {
    next();
  }
});

export default router;
