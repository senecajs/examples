module.exports = function my_init_plugin(options) {
  var world = null

  this.add('say:hello', function(msg, reply) {
    reply({ hello: world })
  })
  
  this.init(function(done) {
    connect_to_database(function(err, output) {
      if(err) return done(err)
      world = output
      done()
    })
  })
}

// Simulate delay in connecting to database and getting some data.
function connect_to_database(done) {
  setTimeout(function() {
    done(null, 'Mars')
  }, 100)
}

