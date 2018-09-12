const Seneca = require('seneca')

const simple_plugin = function(options) {

  this.add({foo: 'bar'}, function(msg, reply) {
    reply({color: options.color})
  })
}

Seneca()
  .quiet()
  .use(simple_plugin, {color:'pink'})
  .act({foo:'bar'}, Seneca.util.print)

