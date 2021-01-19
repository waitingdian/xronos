// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.css';
import './assets/css/common.css';
import App from './App';
import router from './router';
import elementUI from './assets/js/elementUI';
import axios from './assets/js/axios';
import DefaultLayout from './layout/default';
import IndexLayout from './layout/index';


Vue.component('default-layout', DefaultLayout);
Vue.component('index-layout', IndexLayout);

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;

elementUI(Vue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
