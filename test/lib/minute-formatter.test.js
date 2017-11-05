'use strict';

var chai = require('chai');
var expect = chai.expect;

var minuteFormatter = require('../../lib/minute-formatter');

var minute00 = new Date(2017, 3, 4, 5, 0, 0, 0);
var minute01 = new Date(2017, 3, 4, 5, 1, 0, 0);
var minute09 = new Date(2017, 3, 4, 5, 9, 0, 0);
var minute10 = new Date(2017, 3, 4, 5, 10, 0, 0);
var minute59 = new Date(2017, 3, 4, 5, 59, 59, 999);
var minute60 = new Date(2017, 3, 4, 5, 60, 0, 0);

describe('lib/minute-formatter', function() {

  it('Should get minute formatter : "mm"', function() {
    var formatMinute = minuteFormatter('mm');
    expect(formatMinute(minute00)).to.equal('00');
    expect(formatMinute(minute01)).to.equal('01');
    expect(formatMinute(minute09)).to.equal('09');
    expect(formatMinute(minute10)).to.equal('10');
    expect(formatMinute(minute59)).to.equal('59');
    expect(formatMinute(minute60)).to.equal('00');
  });

  it('Should get minute formatter : "m"', function() {
    var formatMinute = minuteFormatter('m');
    expect(formatMinute(minute00)).to.equal('0');
    expect(formatMinute(minute01)).to.equal('1');
    expect(formatMinute(minute09)).to.equal('9');
    expect(formatMinute(minute10)).to.equal('10');
    expect(formatMinute(minute59)).to.equal('59');
    expect(formatMinute(minute60)).to.equal('0');
  });

  it('Should get minute formatter : "mmm"', function() {
    var formatMinute = minuteFormatter('mmm');
    expect(formatMinute(minute00)).to.equal('000');
    expect(formatMinute(minute01)).to.equal('001');
    expect(formatMinute(minute09)).to.equal('009');
    expect(formatMinute(minute10)).to.equal('010');
    expect(formatMinute(minute59)).to.equal('059');
    expect(formatMinute(minute60)).to.equal('000');
  });

});
