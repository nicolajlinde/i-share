import { createRouter, createWebHistory } from 'vue-router'
import UsersList from '@/views/UsersView'
import UserDetail from '@/views/UserDetail'

const routes = [
  {
    path: '/',
    redirect: '/users'
  },
  {
    path: '/users',
    name: 'users',
    component: UsersList
  },
  {
    path: '/users/:id',
    component: UserDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
