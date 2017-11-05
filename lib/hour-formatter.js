'use strict';

var padLeft = require('@fav/text.pad-left');

function hourFormatter(format) {
  return function(date) {
    return padLeft(String(date.getHours()), format.length, '0');
  };
}

module.exports = hourFormatter;
