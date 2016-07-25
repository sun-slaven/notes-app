/**
 * Created by slaven on 16-7-20.
 */

export default (router) => {
  router.map({
    '/dashboard': {
      name: 'dashboard',
      component: function (resolve) {//router的异步加载
        require(['./views/dashboard'],resolve)//AMD依赖加载和router的异步加载实现只有访问该路由时才会加载组件，并且是异步的加载
      }                                            //dashboard 会自动注入resolve方法中作为参数。
    },
    '/login': {
      name: 'login',
      component: require('./views/login')//CMD 写法 加载 Login
    }
  })

  router.redirect({
    '*': '/login'//重定向任意 未匹配 路径
  });
}
