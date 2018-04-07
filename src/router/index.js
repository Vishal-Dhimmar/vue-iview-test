import Vue from 'vue'
import Router from 'vue-router'
import MenuTreeWrapper from '@/components/MenuTreeWrapper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MenuTreeWrapper',
      component: MenuTreeWrapper
    }
  ]
})
