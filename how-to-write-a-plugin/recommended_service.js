const Seneca = require('seneca')

Seneca({tag: 'my_microservice'})
  .quiet()
  .use('my_plugin')
  .use('my_init_plugin')
  .ready(function() {
    console.log('service ready:', this.id)
    console.log('plugins:', Object.keys(this.list_plugins()))
  })
