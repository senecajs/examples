
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
  }

  res.send(code)
})

app.listen(3000)





