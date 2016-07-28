var expect = require('chai').expect
describe('should be true',function () {
  it('testA',function () {
    expect('a'.indexOf('a')).to.be.equal(0)
    expect(true).to.be.ok;
  })
})
