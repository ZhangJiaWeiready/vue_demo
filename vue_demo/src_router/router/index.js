/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/News_detail'
//先引入然后直接声明使用

Vue.use(VueRouter)
// 声明使用vue-router插件
// 内部定义并注册了2个组件标签(
  // router-link -- 路由链接
  // router-view -- 路由页面显示
// 给组件对象添加了两个属性
  // $route 当前路由
  // $router 路由器

export default new VueRouter ({
  // 将路由组件映射成路由
  // 注册应用中所有的路由
  linkActiveClass: 'active',
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'message',
          component: Message,
          children: [
            {
              path: 'detail/:id' ,
              component: Detail
            }
          ]
        },
        {
          path: 'news',
          component: News
        },
        {
          path: '/',
          redirect: 'news'
        }
      ]
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]
})
