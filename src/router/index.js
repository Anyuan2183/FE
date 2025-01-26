import { createRouter, createWebHistory } from 'vue-router'
import login from '.Login.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
  },
  //   {
  //     path: '/about',
  //     name: 'About',
  //     component: About,
  //   },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
