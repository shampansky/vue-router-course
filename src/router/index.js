import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BrazilView from '../views/BrazilView.vue'
import HawaiiView from '../views/HawaiiView.vue'
import JamaicaView from '../views/JamaicaView.vue'
import PanamaView from '../views/PanamaView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  { path: '/brazil', name: 'brazil', component: BrazilView },
  { path: '/hawaii', name: 'hawaii', component: HawaiiView },
  { path: '/jamaica', name: 'jamaica', component: JamaicaView },
  { path: '/panama', name: 'panama', component: PanamaView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
