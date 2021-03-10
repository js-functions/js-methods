var expect = require('chai').expect;
var jm = require('../src');

describe('Get Method', function () {
  it('Test string path', function () {
    var object = { 'a': [{ 'b': { 'c': 3 } }] };
    var getValue = jm.object.get(object, 'a[0].b.c')
    expect(getValue).to.equal(3)
  })

})