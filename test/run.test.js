const Util = require('util')

const Code = require('code')
const Lab = require('lab')


const expect = Code.expect
const lab = exports.lab = Lab.script()

function T(t) { return async () => { await Util.promisify(t)() } }

lab.experiment('how-to-write-a-plugin', () => {
  const folder = '../how-to-write-a-plugin'
  
  lab.test('my_service', T((fin) => {
    require(folder+'/my_service')
    setTimeout(fin,100)
  }))
})
