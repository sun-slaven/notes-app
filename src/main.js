import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App'

// import VueResource from './vue-resource';

// 路由模块和HTTP模块
// Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter();

router.map({
  '/index': {
    component: App
  }
})

router.redirect({
  '*': '/index'
});

router.start(App, '#app');
