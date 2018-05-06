import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainComponent from '@/components/main';
import TrayComponent from '@/components/tray';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: MainComponent
    },
    {
      path:'/tray',
      component:TrayComponent
    }
  ]
})
