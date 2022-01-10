import Vue from 'vue';
import Toto from './Toto.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Toto),
}).$mount('#app');
