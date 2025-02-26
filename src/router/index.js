import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import sourceData from '@/data.json'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/home',
    redirect: '/',
  },
  {
    path: '/protected',
    name: 'protected',
    components: {
      default: () => import('@/views/ProtectedPage.vue'),
      LeftSidebar: () => import('@/components/LeftSidebar.vue')
    },
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/invoices',
    name: 'invoices',
    components: {
      default: () => import('@/views/InvoicesPage.vue'),
      LeftSidebar: () => import('@/components/LeftSidebar.vue')
    },
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/example/:id(\\d+)+',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: () => import('@/views/DestinationShow.vue'),
    props: route => ({...route.params, id: parseInt(route.params.id)}),
    beforeEnter(to) {
      console.log(to)
      const exists = sourceData.destinations.find(item => item.id === +to.params.id);
      if (!exists) return {
        name: 'NotFound',
        params: { pathMatch: to.path.split('/').slice(1), query: to.query, hash: to.hash },
      }
    },
    children: [
      {
        path: ':experienceSlug',
        name: 'experience.card',
        component: () => import('@/views/ExperienceShow.vue'),
        props: route => ({...route.params, id: parseInt(route.params.id)}),
      }
    ]
  },
  {
    path: '/destination/:id/:slug/:experienceSlug',
    name: 'experience.show',
    component: () => import('@/views/ExperienceShow.vue'),
    props: route => ({...route.params, id: parseInt(route.params.id)}),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link',
  scrollBehavior: (to, from, savedPosition) => {
    return savedPosition || new Promise(resolve => {
      setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 300)
    })
  },
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !window.user) {
    return {
      name: 'login',
      query: {
        redirect: to.fullPath,
      }
    }
  }
})

export default router
