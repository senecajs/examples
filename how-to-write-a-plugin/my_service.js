const Seneca = require('seneca')

Seneca()
  .use('my_plugin', {world:'Earth'})
  .act('say:hello', Seneca.util.print)
