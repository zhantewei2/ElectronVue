// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css';
Vue.config.productionTip = false;
const socket=io('http://localhost:4000');

Vue.use(VueMaterial);
socket.on('connect',e=>{
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })
});
window.socket=socket;


/* eslint-disable no-new */

