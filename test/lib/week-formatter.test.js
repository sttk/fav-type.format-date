'use strict';

var chai = require('chai');
var expect = chai.expect;

var weekFormatter = require('../../lib/week-formatter');
var weekThu = new Date(2017, 10, 2);
var weekFri = new Date(2017, 10, 3);
var weekSat = new Date(2017, 10, 4);
var weekSun = new Date(2017, 10, 5);
var weekMon = new Date(2017, 10, 6);
var weekTue = new Date(2017, 10, 7);
var weekWed = new Date(2017, 10, 8);
var weekThu2 = new Date(2017, 10, 9);

describe('lib/week-formatter', function() {

  it('Should get week formatter : Week', function() {
    var formatWeek = weekFormatter.fullname;
    expect(formatWeek(weekThu)).to.equal('Thursday');
    expect(formatWeek(weekFri)).to.equal('Friday');
    expect(formatWeek(weekSat)).to.equal('Saturday');
    expect(formatWeek(weekSun)).to.equal('Sunday');
    expect(formatWeek(weekMon)).to.equal('Monday');
    expect(formatWeek(weekTue)).to.equal('Tuesday');
    expect(formatWeek(weekWed)).to.equal('Wednesday');
    expect(formatWeek(weekThu2)).to.equal('Thursday');
  });

  it('Should get week formatter : Www', function() {
    var formatWeek = weekFormatter.abbreviation;
    expect(formatWeek(weekThu)).to.equal('Thu');
    expect(formatWeek(weekFri)).to.equal('Fri');
    expect(formatWeek(weekSat)).to.equal('Sat');
    expect(formatWeek(weekSun)).to.equal('Sun');
    expect(formatWeek(weekMon)).to.equal('Mon');
    expect(formatWeek(weekTue)).to.equal('Tue');
    expect(formatWeek(weekWed)).to.equal('Wed');
    expect(formatWeek(weekThu2)).to.equal('Thu');
  });

});

