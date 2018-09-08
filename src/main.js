// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueChartkick from 'vue-chartkick'
import VueApexCharts from 'vue-apexcharts'
import Chart from 'chart.js'
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './stylus/main.styl'

Vue.use(VueChartkick, {adapter: Chart})
Vue.use(VueApexCharts)

Vue.use(Vuetify, {
  iconfont: 'md', // 'md' || 'mdi' || 'fa' || 'fa4'
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
