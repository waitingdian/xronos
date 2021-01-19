import Vue from 'vue';
import Router from 'vue-router';
import index from '@/pages/index';
import shop from '@/pages/shop/index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        layout: 'index',
        title: 'xronos'
      }
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop,
    },
  ],
});
