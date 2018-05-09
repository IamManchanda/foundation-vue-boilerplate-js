import Vue from 'vue';
import App from '@/view/App.vue';
import router from '@/view/router/index';
import store from '@/view/store/index';
import '@/registerServiceWorker';
import '@/design/styles.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
