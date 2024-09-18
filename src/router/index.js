import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExperienceShow from '@/views/ExperienceShow.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: () => import('@/views/DestinationShow.vue'),
    props: route => ({...route.params, id: parseInt(route.params.id)}),
  },
  {
    path: '/destination/:id/:slug/:experienceSlug',
    name: 'experience.show',
    component: () => import('@/views/ExperienceShow.vue'),
    props: route => ({...route.params, id: parseInt(route.params.id)}),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link'
})

export default router
