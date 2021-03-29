let expect = require('chai').expect
var jm = require('../src')

describe('Flatten method', () => {
  it('it should throw error if array is not passed', () => {
    const flattenedArray = function () { jm.array.flatten() }   
    expect(flattenedArray).to.throw(TypeError, 'parameter should be of Array type')
  })

  it('it should throw error if parameter is not array', () => {
    const flattenedArray = function () { jm.array.flatten({a:1}) }   
    expect(flattenedArray).to.throw(TypeError, 'parameter should be of Array type')
  })
  
  it('it should return flatten array single level deep ', () => {
    const array = [1, [2, [3, [4]], 5]]
    const mockArray = [1, 2, [3, [4]], 5]    
    const flattenedArray = jm.array.flatten(array)
    expect(JSON.stringify(flattenedArray)).to.equal(JSON.stringify(mockArray))
  })  
})
