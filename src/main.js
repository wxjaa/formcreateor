import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import './assets/styles/element-variables.scss'
import '@/assets/styles/index.scss' // global css
import '@/assets/styles/ruoyi.scss' // ruoyi css
import '@/assets/icons'
import Element from 'element-ui'
Vue.config.productionTip = false
Vue.use(Element)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
