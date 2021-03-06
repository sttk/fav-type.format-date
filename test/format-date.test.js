'use strict';

var chai = require('chai');
var expect = chai.expect;

var fav = {}; fav.type = {}; fav.type.formatDate = require('..');
fav.type.toDate = require('@fav/type.to-date');

var formatDate = fav.type.formatDate;
var toDate = fav.type.toDate;

describe('fav.type.format-date', function() {

  describe('Year', function() {
    describe('Full year: "Y+"', function() {
      it('Should format positive year: "YYYY"', function() {
        var format = formatDate('YYYY/M/D');
        expect(format(toDate(7, 0, 4))).to.equal('0007/1/4');
        expect(format(toDate(17, 9, 14))).to.equal('0017/10/14');
        expect(format(toDate(2017, 10, 4))).to.equal('2017/11/4');
      });

      it('Should format negative year: "Y"', function() {
        var format = formatDate('Y/M/D');
        expect(format(toDate(-7, 0, 4))).to.equal('-7/1/4');
        expect(format(toDate(-17, 9, 14))).to.equal('-17/10/14');
        expect(format(toDate(-2017, 10, 4))).to.equal('-2017/11/4');
      });

      it('Should format with a custom formatter', function() {
        var format = formatDate('Y/M/D', {
          Y: function(date) {
            return '(' + date.getFullYear() + ')';
          },
        });
        expect(format(toDate(2018, 0, 4))).to.equal('(2018)/1/4');
      });
    });

    describe('Century year: "y+"', function() {
      it('Should format positive year: "yy"', function() {
        var format = formatDate('yy/M/D');
        expect(format(toDate(7, 0, 4))).to.equal('07/1/4');
        expect(format(toDate(17, 9, 14))).to.equal('17/10/14');
        expect(format(toDate(2017, 10, 4))).to.equal('17/11/4');
      });

      it('Should format negative year: "y"', function() {
        var format = formatDate('y/M/D');
        expect(format(toDate(-7, 0, 4))).to.equal('-7/1/4');
        expect(format(toDate(-17, 9, 14))).to.equal('-17/10/14');
        expect(format(toDate(-2017, 10, 4))).to.equal('-17/11/4');
      });

      it('Should format with a custom formatter', function() {
        var format = formatDate('yyy/M/D', {
          yyy: function(date) {
            var y = String(date.getFullYear()).slice(-2);
            return '(' + y + ')';
          },
        });
        expect(format(toDate(2018, 0, 4))).to.equal('(18)/1/4');
      });
    });
  });

  describe('Month', function() {
    describe('Month full name: "Month"', function() {
      it('Should format month: "Month"', function() {
        var format = formatDate('Month D');
        expect(format(toDate(2017, 0, 4))).to.equal('January 4');
        expect(format(toDate(2017, 9, 12))).to.equal('October 12');
      });

      it('Should format with a custom formatter', function() {
        var format = formatDate('Y-Month-D', {
          Month: function(date) {
            var m = String(date.getMonth() + 1);
            return '(' + m + ')';
          },
        });
        expect(format(toDate(2018, 0, 4))).to.equal('2018-(1)-4');
      });
    });

    describe('Month abbreviation: "Mmm"', function() {
      it('Should format month: "Mmm"', function() {
        var format = formatDate('Mmm DD, YYYY');
        expect(format(toDate(2017, 1, 9))).to.equal('Feb 09, 2017');
        expect(format(toDate(2017, 10, 22))).to.equal('Nov 22, 2017');
      });

      it('Should format with a custom formatter', function() {
        var format = formatDate('Y-Mmm-D', {
          Mmm: function(date) {
            var m = String(date.getMonth() + 1);
            return '(' + m + ')';
          },
        });
        expect(format(toDate(2018, 0, 4))).to.equal('2018-(1)-4');
      });
    });

    describe('Month : "M+"', function() {
      it('Should format month: "MM"', function() {
        var format = formatDate('YYYY-MM-DD');
        expect(format(toDate(2017, 2, 6))).to.equal('2017-03-06');
        expect(format(toDate(2017, 11, 15))).to.equal('2017-12-15');
      });

      it('Should format month: "M"', function() {
        var format = formatDate('Y-M-D');
        expect(format(toDate(2017, 2, 6))).to.equal('2017-3-6');
        expect(format(toDate(2017, 11, 15))).to.equal('2017-12-15');
      });

      it('Should format with a custom formatter', function() {
        var format = formatDate('Y-MMMM-D', {
          MMMM: function(date) {
            var m = String(date.getMonth() + 1);
            return '(' + m + ')';
          },
        });
        expect(format(toDate(2018, 0, 4))).to.equal('2018-(1)-4');
      });
    });
  });

  describe('Day', function() {
    describe('Day : "D+"', function() {
      it('Should format day: "D"', function() {
        var format = formatDate('Y-M-D');
        expect(format(toDate(2017, 2, 6))).to.equal('2017-3-6');
        expect(format(toDate(2017, 11, 15))).to.equal('2017-12-15');
      });

      it('Should format day: "DD"', function() {
        var format = formatDate('YYYY-MM-DD');
        expect(format(toDate(2017, 2, 6))).to.equal('2017-03-06');
        expect(format(toDate(2017, 11, 15))).to.equal('2017-12-15');
      });

      it('Should format with a custom formatter', function() {
        var format = formatDate('Y+M+DD', {
          DD: function(date) {
            var d = String(date.getDate());
            return '(' + d + ')';
          },
        });
        expect(format(toDate(2018, 0, 4))).to.equal('2018+1+(4)');
      });
    });
  });

  describe('Hour/Minute/Second', function() {
    describe('Hour/Minutes/Second : "H+:m+:s+"', function() {
      it('Should format time: "H", "m", "s"', function() {
        var format = formatDate('H:m:s');
        expect(format(toDate(2017, 2, 6, 1, 2, 3))).to.equal('1:2:3');
        expect(format(toDate(2017, 1, 2, 11, 22, 33))).to.equal('11:22:33');
      });

      it('Should format time: "HH", "mm", "ss"', function() {
        var format = formatDate('HH:mm:ss');
        expect(format(toDate(2017, 2, 6, 1, 2, 3))).to.equal('01:02:03');
        expect(format(toDate(2017, 1, 2, 11, 22, 33))).to.equal('11:22:33');
      });

      it('Should format time with custom formatters', function() {
        var format = formatDate('HH_mm_ss', {
          HH: function(date) {
            return '[' + date.getHours() + ']';
          },
          mm: function(date) {
            return '(' + date.getMinutes() + ')';
          },
          ss: function(date) {
            return '<' + date.getSeconds() + '>';
          },
        });
        expect(format(toDate(2017, 2, 6, 1, 2, 3))).to.equal('[1]_(2)_<3>');
        expect(format(toDate(2017, 1, 2, 11, 22, 33))).to.equal(
          '[11]_(22)_<33>');
      });
    });
  });

  describe('Millisecond', function() {
    describe('Millisecond: "S+"', function() {
      it('Should format msec: "S"', function() {
        var format = formatDate('s:S');
        expect(format(toDate(2017, 2, 6, 1, 2, 3, 4))).to.equal('3:4');
        expect(format(toDate(2017, 2, 6, 1, 2, 3, 400))).to.equal('3:400');
        expect(format(toDate(2017, 1, 2, 1, 2, 33, 456))).to.equal('33:456');
      });

      it('Should format msec: "SSS"', function() {
        var format = formatDate('ss.SSS');
        expect(format(toDate(2017, 2, 6, 1, 2, 3, 4))).to.equal('03.004');
        expect(format(toDate(2017, 2, 6, 1, 2, 3, 400))).to.equal('03.400');
        expect(format(toDate(2017, 1, 2, 1, 2, 33, 456))).to.equal('33.456');
      });

      it('Should format with a custom formatter', function() {
        var format = formatDate('ss.SSS', {
          SSS: function(date) {
            return '[' + date.getMilliseconds() + ']';
          },
        });
        expect(format(toDate(2017, 2, 6, 1, 2, 3, 4))).to.equal('03.[4]');
      });
    });
  });

  describe('Week', function() {
    describe('Week full name: "Week"', function() {
      it('Should format week: "Week"', function() {
        var format = formatDate('Week, M D');
        expect(format(toDate(2017, 6, 7))).to.equal('Friday, 7 7');
        expect(format(toDate(2017, 10, 27))).to.equal('Monday, 11 27');
      });

      it('Should format with a custom formatter', function() {
        var format = formatDate('M/D(Week)', {
          Week: function(date) {
            return '[' + date.getDay() + ']';
          },
        });
        expect(format(toDate(2017, 2, 6, 1, 2, 3, 4))).to.equal('3/6([1])');
      });
    });

    describe('Week abbreviation: "Www"', function() {
      it('Should format week: "Www"', function() {
        var format = formatDate('MM/DD (Www)');
        expect(format(toDate(2017, 6, 7))).to.equal('07/07 (Fri)');
        expect(format(toDate(2017, 10, 27))).to.equal('11/27 (Mon)');
      });

      it('Should format with a custom formatter', function() {
        var format = formatDate('M/D(Www)', {
          Www: function(date) {
            return '[' + date.getDay() + ']';
          },
        });
        expect(format(toDate(2017, 2, 6, 1, 2, 3, 4))).to.equal('3/6([1])');
      });
    });
  });

  it('Should return an empty string when `format` is not a string',
  function() {
    var d = new Date();
    expect(formatDate(undefined)(d)).to.equal('');
    expect(formatDate(null)(d)).to.equal('');
    expect(formatDate(true)(d)).to.equal('');
    expect(formatDate(false)(d)).to.equal('');
    expect(formatDate(0)(d)).to.equal('');
    expect(formatDate(123)(d)).to.equal('');
    expect(formatDate([])(d)).to.equal('');
    expect(formatDate({})(d)).to.equal('');
    expect(formatDate(function(){})(d)).to.equal('');
    expect(formatDate(new Date())(d)).to.equal('');
  });

  it('Should return an empty string when `date` is not a date', function() {
    var format = formatDate('Y/M/D');
    expect(format(undefined)).to.equal('');
    expect(format(null)).to.equal('');
    expect(format(true)).to.equal('');
    expect(format(false)).to.equal('');
    expect(format(0)).to.equal('');
    expect(format(123)).to.equal('');
    expect(format('')).to.equal('');
    expect(format('2017/11/22')).to.equal('');
    expect(format([])).to.equal('');
    expect(format({})).to.equal('');
    expect(format(function(){})).to.equal('');
  });
});
