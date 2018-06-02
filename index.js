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

function formatDate(format, opts) {
  if (!isString(format)) {
    return noop;
  }

  var fmts = [];
  var arr = format.split(/(Y+|y+|Mmm|Month|M+|D+|H+|m+|s+|S+|Www|Week)/);
  for (var i = 0; i < arr.length; i++) {
    var elm = arr[i];
    var customFmt = createFormatter((opts || {})[elm]);

    switch (elm[0]) {
      case 'Y': {
        fmts.push(customFmt || yearFormatter(elm));
        break;
      }
      case 'y': {
        fmts.push(customFmt || yearFormatter.yearsOfCentury(elm));
        break;
      }
      case 'M': {
        switch (elm) {
          case 'Month': {
            fmts.push(customFmt || monthFormatter.fullname);
            break;
          }
          case 'Mmm': {
            fmts.push(customFmt || monthFormatter.abbreviation);
            break;
          }
          default: {
            fmts.push(customFmt || monthFormatter(elm));
            break;
          }
        }
        break;
      }
      case 'D': {
        fmts.push(customFmt || dayFormatter(elm));
        break;
      }
      case 'H': {
        fmts.push(customFmt || hourFormatter(elm));
        break;
      }
      case 'm': {
        fmts.push(customFmt || minuteFormatter(elm));
        break;
      }
      case 's': {
        fmts.push(customFmt || secondFormatter(elm));
        break;
      }
      case 'S': {
        fmts.push(customFmt || millisecondFormatter(elm));
        break;
      }
      case 'W': {
        switch (elm) {
          case 'Week': {
            fmts.push(customFmt || weekFormatter.fullname);
            break;
          }
          default: {
            fmts.push(customFmt || weekFormatter.abbreviation);
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

function createFormatter(fn) {
  if (isFunction(fn)) {
    return function(date) {
      return fn(date);
    };
  }
}

module.exports = formatDate;
