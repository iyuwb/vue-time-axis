import Vue from 'vue'
import App from './App.vue'


// import vueTimeAxisDemo from 'vuetimeaxisdemo'
// import  'vuetimeaxisdemo/vueTimeAxisDemo.css'
// Vue.use(vueTimeAxisDemo);

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
