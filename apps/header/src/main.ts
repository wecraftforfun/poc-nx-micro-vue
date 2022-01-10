import Vue from 'vue';
import Header from './Header.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Header),
}).$mount('#app');
