require.config({
  baseUrl: './amd_modules'
})

require(['ralltiir', 'ralltiir-application/service'], function (rt, Service) {
  rt.services.register('/home', {}, Service)
  rt.services.register('/profile', {title: {html: 'My Profile'}}, Service)
  rt.action.start()
})
