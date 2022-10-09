import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '@/components/Login-Register/LoginForm.vue'
import RegisterForm from '@/components/Login-Register/RegisterForm.vue'
import FormContact from '@/views/FormContact.vue'
// import App from '@/App.vue'
import DialPhone from '@/views/DialPhoneNumber.vue'
import HomeView from '@/views/HomeView.vue'
import BoxContact from '@/views/BoxContact.vue'
import MyLocation from '@/views/MyLocation.vue'
import BoxSetting from '@/views/SettingView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/dial-phone',
    name: 'DialPhoneNumber',
    component: DialPhone
  },
  {
    path: '/form-contact',
    name: 'form',
    component: FormContact
  },
  {
    path: '/box-contact',
    name: 'BoxContact',
    component: BoxContact
  },
  {
    path: '/my-location',
    name: 'MyLocation',
    component: MyLocation
  },
  {
    path: '/setting',
    name: 'BoxSetting',
    component: BoxSetting
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
