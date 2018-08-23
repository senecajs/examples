module.exports = function my_plugin(options) {
  var world = options.world

  this.add('say:hello', function(msg, reply) {
    reply({ hello: world })
  })
}
