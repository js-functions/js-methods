let expect = require('chai').expect
var jm = require('../src')

describe('Flatten methid', () => {
  it('it should return flatten array single level deep ', () => {
    const array = [1, [2, [3, [4]], 5]]
    const mockArray = [1, 2, [3, [4]], 5]    
    const flattenedArray = jm.array.flatten(array)
    expect(JSON.stringify(flattenedArray)).to.equal(JSON.stringify(mockArray))
  })

  it('it should throw error if array is not passed', () => {
    const flattenedArray = function () { jm.array.flatten() }   
    expect(flattenedArray).to.throw(TypeError, 'parameter should be of object type')
  })
})
