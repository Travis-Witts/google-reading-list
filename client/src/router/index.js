import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Saved from '../views/Saved/Saved.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/save',
    name: 'Saved',
    component: Saved
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
