import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import { routes } from './routes';
import VueRouter from 'vue-router';


Vue.use(VueResource); 
Vue.use(VueRouter);

const router = new VueRouter({ 
  routes: routes, 
  mode: 'history'
});
// registrando o router

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)

});