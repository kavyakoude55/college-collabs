import CreateProject from '@/views/CreateProject.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Profile from '@/views/Profile.vue'
import ProjectDetails from '@/views/ProjectDetails.vue'
import Projects from '@/views/Projects.vue'
import Task from '@/views/Task.vue'
<<<<<<< HEAD
import Signup from '@/views/Signup.vue'
=======
import TaskView from '@/views/TaskView.vue'
import YourProjects from '@/views/YourProjects.vue'
>>>>>>> ce0c2e3 (frontend fully developed)
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
    {
<<<<<<< HEAD
      path:"/Signup",
      component:Signup,
=======
      path:"/CreateProject",
      component:CreateProject,
    },
    {
      path:"/YourProjects",
      component:YourProjects,
    },
    {
      path:"/Project/:name",
      component:ProjectDetails,
      name:'ProjectDetails'
    },
    {
      path:"/TaskView",
      component: TaskView,
      name:'TaskView'
>>>>>>> ce0c2e3 (frontend fully developed)
    },
  ],
})

export default router
