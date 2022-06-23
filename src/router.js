import { createWebHistory, createRouter } from "vue-router";
// import { useRouter, useRoute } from 'vue-router'
import Home from "@/components/Home/Home.vue";
import Education from "@/components/Skills/Education.vue";
import Portfolio from "@/components/Portfolio/Portfolio.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/edu",
    name: "Education",
    component: Education,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  }
];
// useRoute()
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;