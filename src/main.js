import Vue from 'vue'
import App from './App.vue'

import vueTimeAxisDemo from 'vuetimeaxisdemo'
import  'vuetimeaxisdemo/vueTimeAxisDemo.css'


Vue.config.productionTip = false

Vue.use(vueTimeAxisDemo);
new Vue({
  render: h => h(App),
}).$mount('#app')
