const Util = require('util')

const Code = require('code')
const Lab = require('lab')

const expect = Code.expect
const lab = exports.lab = Lab.script()

const tmx = parseInt(process.env.TIMEOUT_MULTIPLIER,10) || 1

function T(t) { return async () => { await Util.promisify(t)() } }

lab.experiment('how-to-write-a-plugin', () => {
  const folder = '../how-to-write-a-plugin'
  
  lab.test('service', T((fin) => {
    require(folder+'/my_service')
    require(folder+'/my_init_service')
    require(folder+'/recommended_service')
    require(folder+'/simple')
    setTimeout(fin,555*tmx)
  }))
})
