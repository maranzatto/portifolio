import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layout/MainLayout.vue";
import PortfolioView from "../views/PortfolioView.vue";
import ProjectsView from "../views/ProjectsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "",
          name: "portfolio",
          component: PortfolioView,
        },
        {
          path: "projects",
          name: "projects",
          component: ProjectsView,
        },
      ],
    },
  ],
});

export default router;
