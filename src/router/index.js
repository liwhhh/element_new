import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import PostList from '@/pages/PostList';
import EditPost from '@/pages/EditPost';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: Home,
      children: [
        {
          path: 'postist',
          name: 'postlistPage',
          component:PostList
        },
        {
          path: 'editpost',
          name: 'editpostPage',
          component:EditPost
        }
      ]
    },
    {
      path: '/login',
      name: 'loginPage',
      component: Login
    },
  ]
})
