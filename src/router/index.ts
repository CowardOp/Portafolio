import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Presentacion.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/sobreMi.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../components/servicios.vue')
    },
    {
      path: '/proyects',
      name: 'proyects',
      component: () => import('../components/proyectos.vue')
    }
  ]
})

export default router
