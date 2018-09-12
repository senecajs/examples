module.exports = function simple_plugin(options) {

  this.add({foo: 'bar'}, function(msg, reply) {
    reply({color: options.color})
  })
}
