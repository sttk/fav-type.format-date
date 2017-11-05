'use strict';

var padLeft = require('@fav/text.pad-left');

function minuteFormatter(format) {
  return function(date) {
    return padLeft(String(date.getMinutes()), format.length, '0');
  };
}

module.exports = minuteFormatter;
