require.config({
  baseUrl: './amd_modules'
})

require(['ralltiir', 'ralltiir-application/service', 'ralltiir-application/view/view'], function (rt, Service, View) {
  View.backHTML = '<i class="fa fa-arrow-left"></i>'
  rt.services.register('/home', {}, Service)
  rt.services.register('/profile', {title: {html: 'My Profile'}}, Service)
  rt.action.start({
      root: '/ralltiir-application-demo'
  })
})
