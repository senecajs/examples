
// Notes.
// Use standardjs style: https://standardjs.com/


const Express = require('express')
const Seneca = require('seneca')


const app = Express()


// TODO:
// 1. extend to support red, green, blue - generate PR


app.use('/color/:name', function(req, res) {
  let name = req.params.name
  console.log('NAME', name)

  let code = '#CCCCCC'
  
  if('red' === name) {
    code = '#FF0000'
  } else if('green' === name) {
    code = '#00ff00'
  } else if ('blue' === name) {
    code = '#0000ff'
  }

  res.send(code)
})

app.listen(3000)





