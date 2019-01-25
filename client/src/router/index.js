import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import RegistrationForm from '@/components/RegistrationForm'
import SignOut from '@/components/SignOut'
import Welcome from '@/components/Welcome'
import OrderMenu from '@/components/OrderMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/register',
      name: 'Register',
      component: RegistrationForm
    },
    {
      path: '/signOut',
      name: 'signOut',
      component: SignOut
    },
    {
      path: '/OrderedList',
      name: 'OrderedList',
      component: List
    },
    {
      path: '/OrderMenu',
      name: 'OrderMenu',
      component: OrderMenu
    }
  ]
})
