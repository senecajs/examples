const Seneca = require('seneca')

Seneca()
  .quiet() // only log errors
  .use('my_init_plugin')
  .act('say:hello', Seneca.util.print)
