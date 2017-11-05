'use strict';

var chai = require('chai');
var expect = chai.expect;

var dayFormatter = require('../../lib/day-formatter');

var date01 = new Date(2017, 0, 1);
var date09 = new Date(2017, 0, 9);
var date10 = new Date(2017, 0, 10);
var date20 = new Date(2017, 0, 20);
var date30 = new Date(2017, 0, 30);
var date31 = new Date(2017, 0, 31);
var date00 = new Date(2017, 0, 0);

describe('lib/day-formatter', function() {

  it('Should get day formatter : "DD"', function() {
    var formatDay = dayFormatter('DD');
    expect(formatDay(date01)).to.equal('01');
    expect(formatDay(date09)).to.equal('09');
    expect(formatDay(date10)).to.equal('10');
    expect(formatDay(date20)).to.equal('20');
    expect(formatDay(date30)).to.equal('30');
    expect(formatDay(date31)).to.equal('31');
    expect(formatDay(date00)).to.equal('31');
  });

  it('Should get day formatter : "DDD"', function() {
    var formatDay = dayFormatter('DDD');
    expect(formatDay(date01)).to.equal('001');
    expect(formatDay(date09)).to.equal('009');
    expect(formatDay(date10)).to.equal('010');
    expect(formatDay(date20)).to.equal('020');
    expect(formatDay(date30)).to.equal('030');
    expect(formatDay(date31)).to.equal('031');
    expect(formatDay(date00)).to.equal('031');
  });

  it('Should get day formatter : "D"', function() {
    var formatDay = dayFormatter('D');
    expect(formatDay(date01)).to.equal('1');
    expect(formatDay(date09)).to.equal('9');
    expect(formatDay(date10)).to.equal('10');
    expect(formatDay(date20)).to.equal('20');
    expect(formatDay(date30)).to.equal('30');
    expect(formatDay(date31)).to.equal('31');
    expect(formatDay(date00)).to.equal('31');
  });

});

