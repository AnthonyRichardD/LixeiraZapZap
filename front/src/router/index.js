import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/lixeiras',
      name: 'lixeiras',
      component: () => import('../views/LixeirasView.vue')
    },
    {
      path: '/lixeira/:id',
      name: 'lixeira',
      component: () => import('../views/DeviceView.vue')
    }
  ]
})

export default router
