const Seneca = require('seneca')

Seneca()
  .quiet()
  .use('simple_plugin', {color:'pink'})
  .act({foo:'bar'}, Seneca.util.print)

