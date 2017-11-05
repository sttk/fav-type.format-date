'use strict';

var chai = require('chai');
var expect = chai.expect;

var monthFormatter = require('../../lib/month-formatter');

var month01 = new Date(2017, 0, 1);
var month02 = new Date(2017, 1, 1);
var month03 = new Date(2017, 2, 1);
var month04 = new Date(2017, 3, 1);
var month05 = new Date(2017, 4, 1);
var month06 = new Date(2017, 5, 1);
var month07 = new Date(2017, 6, 1);
var month08 = new Date(2017, 7, 1);
var month09 = new Date(2017, 8, 1);
var month10 = new Date(2017, 9, 1);
var month11 = new Date(2017, 10, 1);
var month12 = new Date(2017, 11, 1);

describe('lib/month-formatter', function() {

  it('Should get month formatter : "MM"', function() {
    var formatMonth = monthFormatter('MM');
    expect(formatMonth(month01)).to.equal('01');
    expect(formatMonth(month02)).to.equal('02');
    expect(formatMonth(month03)).to.equal('03');
    expect(formatMonth(month04)).to.equal('04');
    expect(formatMonth(month05)).to.equal('05');
    expect(formatMonth(month06)).to.equal('06');
    expect(formatMonth(month07)).to.equal('07');
    expect(formatMonth(month08)).to.equal('08');
    expect(formatMonth(month09)).to.equal('09');
    expect(formatMonth(month10)).to.equal('10');
    expect(formatMonth(month11)).to.equal('11');
    expect(formatMonth(month12)).to.equal('12');
  });

  it('Should get month formatter : "MMM"', function() {
    var formatMonth = monthFormatter('MMM');
    expect(formatMonth(month01)).to.equal('001');
    expect(formatMonth(month02)).to.equal('002');
    expect(formatMonth(month03)).to.equal('003');
    expect(formatMonth(month04)).to.equal('004');
    expect(formatMonth(month05)).to.equal('005');
    expect(formatMonth(month06)).to.equal('006');
    expect(formatMonth(month07)).to.equal('007');
    expect(formatMonth(month08)).to.equal('008');
    expect(formatMonth(month09)).to.equal('009');
    expect(formatMonth(month10)).to.equal('010');
    expect(formatMonth(month11)).to.equal('011');
    expect(formatMonth(month12)).to.equal('012');
  });

  it('Should get month formatter : "M"', function() {
    var formatMonth = monthFormatter('M');
    expect(formatMonth(month01)).to.equal('1');
    expect(formatMonth(month02)).to.equal('2');
    expect(formatMonth(month03)).to.equal('3');
    expect(formatMonth(month04)).to.equal('4');
    expect(formatMonth(month05)).to.equal('5');
    expect(formatMonth(month06)).to.equal('6');
    expect(formatMonth(month07)).to.equal('7');
    expect(formatMonth(month08)).to.equal('8');
    expect(formatMonth(month09)).to.equal('9');
    expect(formatMonth(month10)).to.equal('10');
    expect(formatMonth(month11)).to.equal('11');
    expect(formatMonth(month12)).to.equal('12');
  });

  it('Should get month full name formatter', function() {
    var formatMonth = monthFormatter.fullname;
    expect(formatMonth(month01)).to.equal('January');
    expect(formatMonth(month02)).to.equal('February');
    expect(formatMonth(month03)).to.equal('March');
    expect(formatMonth(month04)).to.equal('April');
    expect(formatMonth(month05)).to.equal('May');
    expect(formatMonth(month06)).to.equal('June');
    expect(formatMonth(month07)).to.equal('July');
    expect(formatMonth(month08)).to.equal('August');
    expect(formatMonth(month09)).to.equal('September');
    expect(formatMonth(month10)).to.equal('October');
    expect(formatMonth(month11)).to.equal('November');
    expect(formatMonth(month12)).to.equal('December');
  });

  it('Should get month abbreviation formatter', function() {
    var formatMonth = monthFormatter.abbreviation;
    expect(formatMonth(month01)).to.equal('Jan');
    expect(formatMonth(month02)).to.equal('Feb');
    expect(formatMonth(month03)).to.equal('Mar');
    expect(formatMonth(month04)).to.equal('Apr');
    expect(formatMonth(month05)).to.equal('May');
    expect(formatMonth(month06)).to.equal('Jun');
    expect(formatMonth(month07)).to.equal('Jul');
    expect(formatMonth(month08)).to.equal('Aug');
    expect(formatMonth(month09)).to.equal('Sep');
    expect(formatMonth(month10)).to.equal('Oct');
    expect(formatMonth(month11)).to.equal('Nov');
    expect(formatMonth(month12)).to.equal('Dec');
  });

});

