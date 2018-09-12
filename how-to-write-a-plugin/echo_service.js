const Seneca = require('seneca')

Seneca()
  //.quiet()
  .use('echo')
  .listen(40404)

