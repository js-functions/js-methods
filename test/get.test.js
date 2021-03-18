var expect = require('chai').expect
var jm = require('../src')

describe('Get Method', function () {
  describe('Exceptions', function () {
    it('Test if first parameter is not object', function () {
      var object = ''
      var getValue = function () { return jm.object.get(object, 'a[0].b.c', 5) }
      expect(getValue).to.throw(TypeError)
    })
    it('Test if second parameter is not string', function () {
      var object = { a: [{ b: { c: 3 } }] }
      var getValue = function () { return jm.object.get(object, [], 5) }
      expect(getValue).to.throw(TypeError, 'Second parameter should be string type')
    })
    it('Test to get default value', function () {
      var object = { a: [{ b: { c: 3 } }] }
      var getValue = jm.object.get(object, 'a[0].b.d', 10)
      expect(getValue).to.equal(10)
    })
  })

  describe('Result', function () {
    it('Test with simple object access', function () {
      var object = { a: 3, b: 4, c: 6 }
      var getValue = jm.object.get(object, 'a', 5)
      expect(getValue).to.equal(3)
    })
    it('Test with nested object access', function () {
      var object = { a: { b: 4, c: 6 } }
      var getValue = jm.object.get(object, 'a.b', 5)
      expect(getValue).to.equal(4)
    })
    it('Test with object array', function () {
      var object = { a: [{ b: 4, c: 6 }] }
      var getValue = jm.object.get(object, 'a[0].b', 5)
      expect(getValue).to.equal(4)
    })
    it('Test with deep nested object in array', function () {
      var object = { a: { b: { c: [{ d: { f: 10 }, e: 6 }] } } }
      var getValue = jm.object.get(object, 'a.b.c[0].d.f', 5)
      expect(getValue).to.equal(10)
    })
  })
})