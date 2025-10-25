import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Profile from '@/views/Profile.vue'
import Projects from '@/views/Projects.vue'
import Task from '@/views/Task.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/login",
      component:Login
    },
    {
      path:"/Home",
      component:Home
    },
    {
      path:"/Profile",
      component:Profile,
    },
    {
      path:"/Projects",
      component:Projects,
    },
    {
      path:"/Task",
      component:Task,
    },
  ],
})

export default router
