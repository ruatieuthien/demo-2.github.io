import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '@/components/Login-Register/LoginForm.vue'
import RegisterForm from '@/components/Login-Register/RegisterForm.vue'
import FormContact from '@/components/Box/BoxForm/FormContact.vue'
// import App from '@/App.vue'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/form-contact',
    name: 'form',
    component: FormContact
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginForm,
    hidden: true
  },
  {
    path: '/register',
    name: 'RegisterForm',
    component: RegisterForm,
    hidden: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
