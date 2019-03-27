import Vue from 'vue'
import App from './App.vue'
import '../assets/app.styl'
import VModal from 'vue-js-modal'

Vue.use(VModal, { dynamic: true })

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
