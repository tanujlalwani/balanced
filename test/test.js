var balanced = require('../balanced');
var assert = require('assert');

describe('#balanced()', function() {
  it('check if brackets are balanced', function() {
    assert.equal(balanced('()'), true);
  });
  it('check if brackets are balanced', function() {
    assert.equal(balanced('())'), false);
  });
  it('check if brackets are balanced', function() {
    assert.equal(balanced(')()'), false);
  });
  it('check if brackets are balanced', function() {
    assert.equal(balanced('(((((((((('), false);
  });
  it('check if brackets are balanced', function() {
    assert.equal(balanced('(()())'), true);
  });
  // it('check if brackets are balanced', function() {
  //   assert.equal(balanced('{}([])'), true);
  // });
});
