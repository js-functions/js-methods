var expect = require('chai').expect;
var jm = require('../src');

describe('Pull Method', function () {
  it('Input provided is not an array', function () {
    const inputArray = { a:1, b:2 };
    const isArray =  Array.isArray(inputArray)
    expect(isArray).to.equal(false)
  })
})