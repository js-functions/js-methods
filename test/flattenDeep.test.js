let expect = require('chai').expect
var jm = require('../src')

describe('Flatten method', () => {
  describe('Exceptions', function () {
    it('it should throw error if array is not passed', () => {
      const flattenedArray = function () { jm.array.flattenDeep() }   
      expect(flattenedArray).to.throw(TypeError, 'parameter should be of Array type')
    })

    it('it should throw error if parameter is not array', () => {   
      const array = {a:1}
      flattenedArray = function () { jm.array.flattenDeep(array) }   
      expect(flattenedArray).to.throw(TypeError, 'parameter should be of Array type')
    })
  })

  describe('Result', function () {  
    it('it should return flatten array', () => {
      const array = [1, [2, [3, [4]], 5]]
      const mockArray = [1, 2, 3, 4, 5]    
      const flattenedArray = jm.array.flattenDeep(array)
      expect(JSON.stringify(flattenedArray)).to.equal(JSON.stringify(mockArray))
    })

    it('it should return flatten array for a array which contains string, object as array elements', () => {
      const array = [1, ['string', [3, [{'a':1}]], 5]]
      const mockArray = [1,'string',3,{'a':1},5] 
      const flattenedArray = jm.array.flattenDeep(array)
      expect(JSON.stringify(flattenedArray)).to.equal(JSON.stringify(mockArray))
    })
  }) 
})
