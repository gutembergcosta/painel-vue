import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import 'bootstrap/dist/css/bootstrap.css'

import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

import PrimeVue from 'primevue/config';



import Button from 'primevue/button';
import Menubar from 'primevue/menubar';




Vue.component('Button', Button);
Vue.component('Menubar', Menubar);



Vue.config.productionTip = false;

Vue.use(PrimeVue, {ripple: true});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
