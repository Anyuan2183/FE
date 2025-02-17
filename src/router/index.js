// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout/Layout.vue'
// import Login from '../views/Login/Login.vue'
import About from '../views/About/About.vue'
import Home from '../views/Home/Home.vue'

// 定义路由规则
const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Layout,
  // },
  // { path: '/login', name: 'login', component: Login },
    {
      path: '/',
      component: Layout, // 父组件
      children: [
        {
          path: '', // 默认子路由
          component: Home,
        },
        {
          path: 'about', // 子路由
          component: About,
        },
      ],
    },
]

// 创建路由实例
const router = createRouter({
  // 使用 HTML5 History 模式
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// 添加全局前置守卫
router.beforeEach((to, from, next) => {
  console.log('Before route change')
  next()
})

export default router
