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
