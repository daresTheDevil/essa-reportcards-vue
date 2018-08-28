import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  { path: '/', component: 'LandingPage' },
  { path: '/landing', component: 'LandingPage' },
  { path: '/school', component: 'SchoolPage' },
  { path: '/secondary', component: 'SecondaryPage' },
  { path: '/card', component: 'maincard' },
  { path: '/district/:id', name: 'District', component: 'DistrictPage', props: true }
]

const routes = routerOptions.map(route => ({
  ...route,
  component: () => import(`@/components/${route.component}.vue`)
}))

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})
