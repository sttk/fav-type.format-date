'use strict';

var chai = require('chai');
var expect = chai.expect;

var hourFormatter = require('../../lib/hour-formatter');

var hour00 = new Date(2017, 3, 4, 0, 0, 0, 0);
var hour01 = new Date(2017, 3, 4, 1, 0, 0, 0);
var hour09 = new Date(2017, 3, 4, 9, 0, 0, 0);
var hour10 = new Date(2017, 3, 4, 10, 0, 0, 0);
var hour23 = new Date(2017, 3, 4, 23, 59, 59, 999);
var hour24 = new Date(2017, 3, 4, 24, 0, 0, 0);

describe('lib/hour-formatter', function() {

  it('Should get hour formatter : "HH"', function() {
    var formatHour = hourFormatter('HH');
    expect(formatHour(hour00)).to.equal('00');
    expect(formatHour(hour01)).to.equal('01');
    expect(formatHour(hour09)).to.equal('09');
    expect(formatHour(hour10)).to.equal('10');
    expect(formatHour(hour23)).to.equal('23');
    expect(formatHour(hour24)).to.equal('00');
  });

  it('Should get hour formatter : "H"', function() {
    var formatHour = hourFormatter('H');
    expect(formatHour(hour00)).to.equal('0');
    expect(formatHour(hour01)).to.equal('1');
    expect(formatHour(hour09)).to.equal('9');
    expect(formatHour(hour10)).to.equal('10');
    expect(formatHour(hour23)).to.equal('23');
    expect(formatHour(hour24)).to.equal('0');
  });

  it('Should get hour formatter : "HHH"', function() {
    var formatHour = hourFormatter('HHH');
    expect(formatHour(hour00)).to.equal('000');
    expect(formatHour(hour01)).to.equal('001');
    expect(formatHour(hour09)).to.equal('009');
    expect(formatHour(hour10)).to.equal('010');
    expect(formatHour(hour23)).to.equal('023');
    expect(formatHour(hour24)).to.equal('000');
  });

});
