import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';

import './bulma.scss';

Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
  router,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('app-mounted'));
  }
}).$mount('#app');
