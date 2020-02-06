var balanced = require('../balanced');
var assert = require('assert');

describe('#balanced()', function() {
  // Basic parentheses
  it('check if brackets are balanced', function() {
    assert.equal(balanced(''), true);
  });
  it('check if brackets are balanced', function() {
    assert.equal(balanced('(()())'), true);
  });
  it('check if brackets are balanced', function() {
    assert.equal(balanced('()('), false);
  });
  it('check if brackets are balanced', function() {
    assert.equal(balanced(')()'), false);
  });
  it('check if brackets are balanced', function() {
    assert.equal(balanced('(((((((((('), false);
  });

  // Mixed parentheses
  it('check if brackets are balanced', function() {
    assert.equal(balanced('{}([])'), true);
  });
  it('check if brackets are balanced', function() {
    assert.equal(balanced('[{}([])]()'), true);
  });
  it('check if brackets are balanced', function() {
    assert.equal(balanced('{{[(])}}'), false);
  });
  it('check if brackets are balanced', function() {
    assert.equal(balanced('}{[]}}'), false);
  });
  it('check if brackets are balanced', function() {
    assert.equal(balanced('([](()()){[]((((()))))})'), true);
  });

  // Mixed parenthesis + other chars
  it('check if brackets are balanced', function() {
    assert.equal(balanced('(abc (def (hij)))'), true);
  });
  it('check if brackets are balanced', function() {
    assert.equal(balanced('[(a^2) + (b^2) - 2 * (5-(2/(2+3)))]'), true);
  });
  it('check if brackets are balanced', function() {
    assert.equal(balanced('(((a[bc(])))'), false);
  });
  it('check if brackets are balanced', function() {
    assert.equal(balanced('abc(yuiop)(((((([234]{q}))))))zxc'), true);
  });
  it('check if brackets are balanced', function() {
    assert.equal(balanced('{[()](asd)}'), true);
  });
});
