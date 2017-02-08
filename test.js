const toNumber = require('./')
const assert = require('assert')

assert.equal(toNumber([0,0,0,0]), 0)
assert.equal(toNumber([1,1,1,1]), 0xffffffff)
assert.equal(toNumber([0,0,0,1]), 0x000000ff)
assert.equal(toNumber([0,0,1,0]), 0x0000ff00)
assert.equal(toNumber([0,1,0,0]), 0x00ff0000)
assert.equal(toNumber([1,0,0,0]), 0xff000000)
assert.equal(toNumber([1,1,0,0]), 0xffff0000)
assert.equal(toNumber([0,1,1,0]), 0x00ffff00)

assert.equal(toNumber([1,1,1]), 0xffffffff)
assert.equal(toNumber([2,1,1]), 0xffffffff)
assert.equal(toNumber([-1,-1,-1,-1]), 0)

// console.log(toNumber([.1, .5, .5, .1]).toString(16))
