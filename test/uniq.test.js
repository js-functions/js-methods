let expect = require('chai').expect
var jm = require('../src')

describe('Uniq method', () => {
  it('it should return uniqe (duplicate elements free)  array', () => {
    const array = [1, 2, 3, 4, 1, 2, 5]
    const mockArray = [1, 2, 3, 4, 5]
    const uniqeArray = jm.array.uniq(array)
    expect(JSON.stringify(uniqeArray)).to.equal(JSON.stringify(mockArray))
  })

  it('it should return empty array if array is not passed', () => {
    const uniqeArray = jm.array.uniq()
    expect(JSON.stringify([])).to.equal(JSON.stringify([]))
  })
})
