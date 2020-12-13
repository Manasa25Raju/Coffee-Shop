import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import RegistrationForm from '@/components/RegistrationForm'
import SignOut from '@/components/SignOut'
import Welcome from '@/components/Welcome'
import OrderMenu from '@/components/OrderMenu'
import team from '@/components/contact'
import sign from '@/components/sign'
import feedback from '@/components/feedback'
import review from '@/components/review'
import payment from '@/components/Payment'
import Menu from '@/components/menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
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
    },
    {
      path: '/team',
      name: 'team',
      component: team
    },
    {
      path: '/sign',
      name: 'sign',
      component: sign
    },
    {
      path: '/review',
      name: 'review',
      component: review
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: feedback
    },
    {
      path: '/payment',
      name: 'payment',
      component: payment
    }
  ]
})
