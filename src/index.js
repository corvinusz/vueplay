import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'
import Vuetify from 'vuetify'

Vue.use(Vuetify, { iconfont: 'fa' })
Vue.use(VModal, { dynamic: true })

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
