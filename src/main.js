import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

// import VueResource from './vue-resource';

// 路由模块和HTTP模块
// Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter();

router.map({
  '/dashboard': {
    name: 'dashboard',
    component: Dashboard
  },
  '/login': {
    name: 'login',
	  component: Login
  }
})

router.redirect({
  '*': '/login'
});

router.start(App, '#app');//此处的'app'为indexwen.html的元素，并不是App里的template元素。
// App作为跟组件,使用到<router-view>,以此切换路由视图
//App并不会出现在route.map中作为某个路由的component配置
