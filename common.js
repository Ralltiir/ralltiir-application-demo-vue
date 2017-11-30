require.config({
  baseUrl: localStorage.getItem('rt.debug') ? 'amd_modules' : '//unpkg.com',
  paths: {
    vue: 'https://cdn.bootcss.com/vue/2.5.9/vue.min'
  }
})

// apmjs auto-creates these entries when installed locally
define('ralltiir', function (require) {
    return require('ralltiir/src/index')
})
define('ralltiir-application', function (require) {
    return require('ralltiir-application/service')
})

require(['ralltiir', 'ralltiir-application', 'ralltiir-application/view/view'], function (rt, Service, View) {
  View.backHTML = '<i class="fa fa-arrow-left"></i>'
  rt.services.register('/home', {title: 'Ralltiir for VUE'}, Service)
  rt.services.register('/todolist', {title: 'Todo List'}, Service)

  rt.action.start({
      root: '/ralltiir-application-demo-vue'
  })
})
