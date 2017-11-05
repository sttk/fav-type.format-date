'use strict';

var chai = require('chai');
var expect = chai.expect;

var secondFormatter = require('../../lib/second-formatter');

var second00 = new Date(2017, 1, 2, 3, 4, 0, 0);
var second01 = new Date(2017, 1, 2, 3, 4, 1, 0);
var second09 = new Date(2017, 1, 2, 3, 4, 9, 0);
var second10 = new Date(2017, 1, 2, 3, 4, 10, 0);
var second59 = new Date(2017, 1, 2, 3, 4, 59, 0);
var second60 = new Date(2017, 1, 2, 3, 4, 60, 0);

describe('lib/second-formatter', function() {

  it('Should get second formatter : "ss"', function() {
    var formatSecond = secondFormatter('ss');
    expect(formatSecond(second00)).to.equal('00');
    expect(formatSecond(second01)).to.equal('01');
    expect(formatSecond(second09)).to.equal('09');
    expect(formatSecond(second10)).to.equal('10');
    expect(formatSecond(second59)).to.equal('59');
    expect(formatSecond(second60)).to.equal('00');
  });

  it('Should get second formatter : "s"', function() {
    var formatSecond = secondFormatter('s');
    expect(formatSecond(second00)).to.equal('0');
    expect(formatSecond(second01)).to.equal('1');
    expect(formatSecond(second09)).to.equal('9');
    expect(formatSecond(second10)).to.equal('10');
    expect(formatSecond(second59)).to.equal('59');
    expect(formatSecond(second60)).to.equal('0');
  });

  it('Should get second formatter : "sss"', function() {
    var formatSecond = secondFormatter('sss');
    expect(formatSecond(second00)).to.equal('000');
    expect(formatSecond(second01)).to.equal('001');
    expect(formatSecond(second09)).to.equal('009');
    expect(formatSecond(second10)).to.equal('010');
    expect(formatSecond(second59)).to.equal('059');
    expect(formatSecond(second60)).to.equal('000');
  });

});
