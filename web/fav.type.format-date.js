(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g=(g.fav||(g.fav = {}));g=(g.type||(g.type = {}));g.formatDate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./lib/day-formatter":2,"./lib/hour-formatter":3,"./lib/millisecond-formatter":4,"./lib/minute-formatter":5,"./lib/month-formatter":6,"./lib/second-formatter":7,"./lib/week-formatter":8,"./lib/year-formatter":9,"@fav/type.is-function":12,"@fav/type.is-string":13,"@fav/type.is-valid-date":14}],2:[function(require,module,exports){
'use strict';

var padLeft = require('@fav/text.pad-left');

function dayFormatter(format) {
  return function(date) {
    return padLeft(String(date.getDate()), format.length, '0');
  };
}

module.exports = dayFormatter;

},{"@fav/text.pad-left":10}],3:[function(require,module,exports){
'use strict';

var padLeft = require('@fav/text.pad-left');

function hourFormatter(format) {
  return function(date) {
    return padLeft(String(date.getHours()), format.length, '0');
  };
}

module.exports = hourFormatter;

},{"@fav/text.pad-left":10}],4:[function(require,module,exports){
'use strict';

var padLeft = require('@fav/text.pad-left');

function millisecondFormatter(format) {
  return function(date) {
    return padLeft(String(date.getMilliseconds()), format.length, '0');
  };
}

module.exports = millisecondFormatter;

},{"@fav/text.pad-left":10}],5:[function(require,module,exports){
'use strict';

var padLeft = require('@fav/text.pad-left');

function minuteFormatter(format) {
  return function(date) {
    return padLeft(String(date.getMinutes()), format.length, '0');
  };
}

module.exports = minuteFormatter;

},{"@fav/text.pad-left":10}],6:[function(require,module,exports){
'use strict';

var padLeft = require('@fav/text.pad-left');

function monthFormatter(format) {
  return function(date) {
    return padLeft(String(date.getMonth() + 1), format.length, '0');
  };
}

function getFullname(date) {
  switch (date.getMonth()) {
    case 0: {
      return 'January';
    }
    case 1: {
      return 'February';
    }
    case 2: {
      return 'March';
    }
    case 3: {
      return 'April';
    }
    case 4: {
      return 'May';
    }
    case 5: {
      return 'June';
    }
    case 6: {
      return 'July';
    }
    case 7: {
      return 'August';
    }
    case 8: {
      return 'September';
    }
    case 9: {
      return 'October';
    }
    case 10: {
      return 'November';
    }
    case 11: {
      return 'December';
    }
  }
}

function getAbbreviation(date) {
  return getFullname(date).slice(0, 3);
}

monthFormatter.fullname = getFullname;
monthFormatter.abbreviation = getAbbreviation;

module.exports = monthFormatter;

},{"@fav/text.pad-left":10}],7:[function(require,module,exports){
'use strict';

var padLeft = require('@fav/text.pad-left');

function secondFormatter(format) {
  return function(date) {
    return padLeft(String(date.getSeconds()), format.length, '0');
  };
}

module.exports = secondFormatter;

},{"@fav/text.pad-left":10}],8:[function(require,module,exports){
'use strict';

function getFullname(date) {
  switch (date.getDay()) {
    case 0: {
      return 'Sunday';
    }
    case 1: {
      return 'Monday';
    }
    case 2: {
      return 'Tuesday';
    }
    case 3: {
      return 'Wednesday';
    }
    case 4: {
      return 'Thursday';
    }
    case 5: {
      return 'Friday';
    }
    case 6: {
      return 'Saturday';
    }
  }
}

function getAbbreviation(date) {
  return getFullname(date).slice(0, 3);
}

var weekFormatter = {
  fullname: getFullname,
  abbreviation: getAbbreviation,
};

module.exports = weekFormatter;

},{}],9:[function(require,module,exports){
'use strict';

var padLeft = require('@fav/text.pad-left');

function yearFormatter(format) {
  return function(date) {
    var year = date.getFullYear();
    var sign = (year < 0) ? '-' : '';
    return sign + padLeft(String(Math.abs(year)), format.length, '0');
  };
}

function yearsOfCentury(format) {
  return function(date) {
    var year = date.getFullYear();
    var sign = (year < 0) ? '-' : '';
    return sign + padLeft(String(Math.abs(year % 100)), format.length, '0');
  };
}

yearFormatter.yearsOfCentury = yearsOfCentury;

module.exports = yearFormatter;

},{"@fav/text.pad-left":10}],10:[function(require,module,exports){
'use strict';

var repeat = require('@fav/text.repeat');

function padLeft(source, length, padding) {
  if (!length || length <= source.length) {
    return source;
  }

  if (!padding) {
    padding = ' ';
  }

  var padsLen = length - source.length;
  var padsNum = Math.ceil(padsLen / padding.length);
  var pads = repeat(padding, padsNum).slice(0, padsLen);

  return pads + source;
}

module.exports = padLeft;

},{"@fav/text.repeat":11}],11:[function(require,module,exports){
'use strict';

function repeat(source, ntimes) {
  if (ntimes < 1) {
    return '';
  }

  var unitlen = source.length;
  var halftime = Math.ceil(ntimes / 2);

  for (var i = 1; i < halftime; i += i) {
    source += source;
  }

  return source + source.slice(0, (ntimes - i) * unitlen);;
}

module.exports = repeat;

},{}],12:[function(require,module,exports){
'use strict';

function isFunction(value) {
  return (typeof value === 'function');
}

function isNotFunction(value) {
  return (typeof value !== 'function');
}

Object.defineProperty(isFunction, 'not', {
  enumerable: true,
  value: isNotFunction,
});

module.exports = isFunction;

},{}],13:[function(require,module,exports){
'use strict';

function isString(value) {
  if (typeof value === 'string') {
    return true;
  }
  if (Object.prototype.toString.call(value) === '[object String]') {
    return true;
  }
  return false;
}

function isNotString(value) {
  return !isString(value);
}

Object.defineProperty(isString, 'not', {
  enumerable: true,
  value: isNotString,
});

module.exports = isString;

},{}],14:[function(require,module,exports){
'use strict';

function isValidDate(value) {
  if (!(value instanceof Date)) {
    return false;
  }

  var time = value.getTime();
  return time === time;
}

module.exports = isValidDate;

},{}]},{},[1])(1)
});