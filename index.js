'use strict';

var isString = require('@fav/type.is-string');
var isFunction = require('@fav/type.is-function');
var isValidDate = require('@fav/type.is-valid-date');

var yearFormatter = require('./lib/year-formatter');
var monthFormatter = require('./lib/month-formatter');
var dayFormatter = require('./lib/day-formatter');
var hourFormatter = require('./lib/hour-formatter');
var minuteFormatter = require('./lib/minute-formatter');
var secondFormatter = require('./lib/second-formatter');
var millisecondFormatter = require('./lib/millisecond-formatter');
var weekFormatter = require('./lib/week-formatter');

function formatDate(format) {
  if (!isString(format)) {
    return noop;
  }

  var fmts = [];
  var arr = format.split(/(Y+|y+|Mmm|Month|M+|D+|H+|m+|s+|S+|Www|Week)/);
  for (var i = 0; i < arr.length; i++) {
    var elm = arr[i];

    switch (elm[0]) {
      case 'Y': {
        fmts.push(yearFormatter(elm));
        break;
      }
      case 'y': {
        fmts.push(yearFormatter.yearsOfCentury(elm));
        break;
      }
      case 'M': {
        switch (elm) {
          case 'Month': {
            fmts.push(monthFormatter.fullname);
            break;
          }
          case 'Mmm': {
            fmts.push(monthFormatter.abbreviation);
            break;
          }
          default: {
            fmts.push(monthFormatter(elm));
            break;
          }
        }
        break;
      }
      case 'D': {
        fmts.push(dayFormatter(elm));
        break;
      }
      case 'H': {
        fmts.push(hourFormatter(elm));
        break;
      }
      case 'm': {
        fmts.push(minuteFormatter(elm));
        break;
      }
      case 's': {
        fmts.push(secondFormatter(elm));
        break;
      }
      case 'S': {
        fmts.push(millisecondFormatter(elm));
        break;
      }
      case 'W': {
        switch (elm) {
          case 'Week': {
            fmts.push(weekFormatter.fullname);
            break;
          }
          default: {
            fmts.push(weekFormatter.abbreviation);
            break;
          }
        }
        break;
      }
      default: {
        fmts.push(elm);
      }
    }
  }
  
  return function(date) {
    if (!isValidDate(date)) {
      return '';
    }

    var str = '';
    for (var i = 0; i < fmts.length; i++) {
      var fmtElm = fmts[i];
      if (isFunction(fmtElm)) {
        str += fmtElm(date);
      } else {
        str += fmtElm;
      }
    }
    return str;
  };
}

function noop() {
  return '';
};

module.exports = formatDate;
