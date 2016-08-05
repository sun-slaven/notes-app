import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import configRouter from './routers'
import { logged } from './vuex/getters'
import store from './vuex/store'
import { stringFilter } from './filters'


// import VueResource from './vue-resource';
// Vue.use(VueResource);

Vue.config.debug = true;//开启错误提示

Vue.filter('stringFilter',stringFilter)

Vue.use(VueRouter);
const router = new VueRouter();
configRouter(router);
router.beforeEach((transition) => { //transition : { to, next }
  if (transition.to.path != '/login'){
    if(logged(store.state)){
      transition.next()
    }
    else {
      transition.redirect({name: 'login'})
    }
  }else {
    transition.next()
  }

});

router.start(App, '#app');//此处的'app'为index.html的元素，并不是App里的template元素。
// App作为跟组件,使用到<router-view>,以此切换路由视图
//App并不会出现在route.map中作为某个路由的component配置
