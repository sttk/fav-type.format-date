'use strict';

var chai = require('chai');
var expect = chai.expect;

var yearFormatter = require('../../lib/year-formatter');

var year2017 = new Date(2017, 0, 1);
var year317 = new Date(2017, 0, 1);
var year7 = new Date(2017, 0, 1);
var year12017 = new Date(2017, 0, 1);
var yearMinus7 = new Date(2017, 0, 1);
var yearMinus317 = new Date(2017, 0, 1);
var yearMinus2017 = new Date(2017, 0, 1);
var yearMinus12017 = new Date(2017, 0, 1);

year2017.setFullYear(2017);
year317.setFullYear(317);
year7.setFullYear(7);
year12017.setFullYear(12017);
yearMinus2017.setFullYear(-2017);
yearMinus317.setFullYear(-317);
yearMinus7.setFullYear(-7);
yearMinus12017.setFullYear(-12017);

describe('lib/year-formatter', function() {

  it('Should get year formatter : "YYYY"', function() {
    var formatYear = yearFormatter('YYYY');
    expect(formatYear(year2017)).to.equal('2017');
    expect(formatYear(year317)).to.equal('0317');
    expect(formatYear(year7)).to.equal('0007');
    expect(formatYear(year12017)).to.equal('12017');
    expect(formatYear(yearMinus2017)).to.equal('-2017');
    expect(formatYear(yearMinus317)).to.equal('-0317');
    expect(formatYear(yearMinus7)).to.equal('-0007');
    expect(formatYear(yearMinus12017)).to.equal('-12017');
  });

  it('Should get year formatter : "YYYYY"', function() {
    var formatYear = yearFormatter('YYYYY');
    expect(formatYear(year2017)).to.equal('02017');
    expect(formatYear(year317)).to.equal('00317');
    expect(formatYear(year7)).to.equal('00007');
    expect(formatYear(year12017)).to.equal('12017');
    expect(formatYear(yearMinus2017)).to.equal('-02017');
    expect(formatYear(yearMinus317)).to.equal('-00317');
    expect(formatYear(yearMinus7)).to.equal('-00007');
    expect(formatYear(yearMinus12017)).to.equal('-12017');
  });

  it('Should get year formatter : "YY"', function() {
    var formatYear = yearFormatter('YY');
    expect(formatYear(year2017)).to.equal('2017');
    expect(formatYear(year317)).to.equal('317');
    expect(formatYear(year7)).to.equal('07');
    expect(formatYear(year12017)).to.equal('12017');
    expect(formatYear(yearMinus2017)).to.equal('-2017');
    expect(formatYear(yearMinus317)).to.equal('-317');
    expect(formatYear(yearMinus7)).to.equal('-07');
    expect(formatYear(yearMinus12017)).to.equal('-12017');
  });

  it('Should get year formatter : "Y"', function() {
    var formatYear = yearFormatter('Y');
    expect(formatYear(year2017)).to.equal('2017');
    expect(formatYear(year317)).to.equal('317');
    expect(formatYear(year7)).to.equal('7');
    expect(formatYear(year12017)).to.equal('12017');
    expect(formatYear(yearMinus2017)).to.equal('-2017');
    expect(formatYear(yearMinus317)).to.equal('-317');
    expect(formatYear(yearMinus7)).to.equal('-7');
    expect(formatYear(yearMinus12017)).to.equal('-12017');
  });

  it('Should get a formetter for years of century : "yy"', function() {
    var formatYear = yearFormatter.yearsOfCentury('yy');
    expect(formatYear(year2017)).to.equal('17');
    expect(formatYear(year317)).to.equal('17');
    expect(formatYear(year7)).to.equal('07');
    expect(formatYear(year12017)).to.equal('17');
    expect(formatYear(yearMinus2017)).to.equal('-17');
    expect(formatYear(yearMinus317)).to.equal('-17');
    expect(formatYear(yearMinus7)).to.equal('-07');
    expect(formatYear(yearMinus12017)).to.equal('-17');
  });

  it('Should get a formetter for years of century : "yyy"', function() {
    var formatYear = yearFormatter.yearsOfCentury('yyy');
    expect(formatYear(year2017)).to.equal('017');
    expect(formatYear(year317)).to.equal('017');
    expect(formatYear(year7)).to.equal('007');
    expect(formatYear(year12017)).to.equal('017');
    expect(formatYear(yearMinus2017)).to.equal('-017');
    expect(formatYear(yearMinus317)).to.equal('-017');
    expect(formatYear(yearMinus7)).to.equal('-007');
    expect(formatYear(yearMinus12017)).to.equal('-017');
  });

  it('Should get a formetter for years of century : "y"', function() {
    var formatYear = yearFormatter.yearsOfCentury('y');
    expect(formatYear(year2017)).to.equal('17');
    expect(formatYear(year317)).to.equal('17');
    expect(formatYear(year7)).to.equal('7');
    expect(formatYear(year12017)).to.equal('17');
    expect(formatYear(yearMinus2017)).to.equal('-17');
    expect(formatYear(yearMinus317)).to.equal('-17');
    expect(formatYear(yearMinus7)).to.equal('-7');
    expect(formatYear(yearMinus12017)).to.equal('-17');
  });
});

