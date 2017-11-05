'use strict';

var chai = require('chai');
var expect = chai.expect;

var millisecondFormatter = require('../../lib/millisecond-formatter');

var msec00 = new Date(2017, 1, 2, 3, 4, 5, 0);
var msec01 = new Date(2017, 1, 2, 3, 4, 5, 1);
var msec09 = new Date(2017, 1, 2, 3, 4, 5, 9);
var msec10 = new Date(2017, 1, 2, 3, 4, 5, 10);
var msec99 = new Date(2017, 1, 2, 3, 4, 5, 99);
var msec100 = new Date(2017, 1, 2, 3, 4, 5, 100);
var msec999 = new Date(2017, 1, 2, 3, 4, 5, 999);
var msec1000 = new Date(2017, 1, 2, 3, 4, 5, 1000);

describe('lib/millisecond-formatter', function() {

  it('Should get millisecond formatter : "SSS"', function() {
    var formatMsec = millisecondFormatter('SSS');
    expect(formatMsec(msec00)).to.equal('000');
    expect(formatMsec(msec01)).to.equal('001');
    expect(formatMsec(msec09)).to.equal('009');
    expect(formatMsec(msec10)).to.equal('010');
    expect(formatMsec(msec99)).to.equal('099');
    expect(formatMsec(msec100)).to.equal('100');
    expect(formatMsec(msec999)).to.equal('999');
    expect(formatMsec(msec1000)).to.equal('000');
  });

  it('Should get millisecond formatter : "S"', function() {
    var formatMsec = millisecondFormatter('S');
    expect(formatMsec(msec00)).to.equal('0');
    expect(formatMsec(msec01)).to.equal('1');
    expect(formatMsec(msec09)).to.equal('9');
    expect(formatMsec(msec10)).to.equal('10');
    expect(formatMsec(msec99)).to.equal('99');
    expect(formatMsec(msec100)).to.equal('100');
    expect(formatMsec(msec999)).to.equal('999');
    expect(formatMsec(msec1000)).to.equal('0');
  });

  it('Should get millisecond formatter : "SSSS"', function() {
    var formatMsec = millisecondFormatter('SSSS');
    expect(formatMsec(msec00)).to.equal('0000');
    expect(formatMsec(msec01)).to.equal('0001');
    expect(formatMsec(msec09)).to.equal('0009');
    expect(formatMsec(msec10)).to.equal('0010');
    expect(formatMsec(msec99)).to.equal('0099');
    expect(formatMsec(msec100)).to.equal('0100');
    expect(formatMsec(msec999)).to.equal('0999');
    expect(formatMsec(msec1000)).to.equal('0000');
  });

});
