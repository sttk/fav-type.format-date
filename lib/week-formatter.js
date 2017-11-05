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
