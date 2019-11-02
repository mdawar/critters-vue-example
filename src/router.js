import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Contact from '@/pages/Contact.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
});
