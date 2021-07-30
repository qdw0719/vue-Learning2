import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/About.vue')
    },
    {
        path: '/practice',
        name: 'Practice',
        component: () => import('../views/Practice.vue')
    },
    {
        path: '/rendering',
        name: 'Rendering.vue',
        component: () => import('../views/Rendering.vue')
    },
    {
        path: '/event',
        name: 'Event.vue',
        component: () => import('../views/Event.vue')
    },
    {
        path: '/computedAndWatch',
        name: 'ComputedAndWatch.vue',
        component: () => import('../views/ComputedAndWatch.vue')
    },
    {
        path: '/search',
        name: 'Search.vue',
        component: () => import('../views/Search.vue')
    },
    {
        path: '/save',
        name: 'Save.vue',
        component: () => import('../views/Save.vue')
    },
    {
        path: '/serverData',
        name: 'ServerData.vue',
        component: () => import('../views/ServerData.vue')
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
