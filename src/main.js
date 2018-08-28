// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueChartkick from 'vue-chartkick'
import Highcharts from 'highcharts'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import './stylus/main.styl'

Vue.use(VueChartkick, {adapter: Highcharts})

Vue.use(Vuetify, {
  iconfont: 'fa',
  theme: {
    primary: '#001f3f',
    secondary: '#39cccc',
    accent: '#f012be',
    success: '#2ecc40',
    info: '#7fdbff',
    warning: '#ffdc00',
    error: '#85144b'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
