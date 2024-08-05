import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Presentacion.vue')
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
      path: '/contact',
      name: 'contact',
      component: () => import('../components/contacto.vue')
    },
    {
      path: '/proyects',
      name: 'proyects',
      component: () => import('../components/proyectos.vue')
    }
  ]
})

export default router
