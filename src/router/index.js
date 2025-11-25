import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('../views/CoursesView.vue')
    },
    {
      path: '/volunteer',
      name: 'volunteer',
      component: () => import('../views/VolunteerWorkView.vue')
    },
    {
      path: '/expo-tech',
      name: 'expo-tech',
      component: () => import('../views/ExpoTechView.vue')
    },
    {
      path: '/expo',
      name: 'expo',
      component: () => import('../views/ExpoView.vue')
    },
    {
      path: '/hackathon',
      name: 'hackathon',
      component: () => import('../views/HackathonView.vue')
    },
    {
      path: '/thesis',
      name: 'thesis',
      component: () => import('../views/ThesisView.vue')
    },
  ],
})

export default router
