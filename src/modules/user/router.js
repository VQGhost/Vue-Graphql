import UserPage from "./pages/User.vue";

export const UserRoutes = [
  {
    path: "/",
    name: "home",
    component: UserPage,
    meta: {
      requiresAuth: true,
    },
  },
];
