import HomePage from '@/pages/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/performance',
      name: 'performance',
      component: () => import('@/pages/PerformancePage.vue'),
    },
    {
      path: '/crud',
      name: 'crud',
      component: () => import('@/pages/ApiCrudPage/index.vue'),
    },
  ],
})

export default router
