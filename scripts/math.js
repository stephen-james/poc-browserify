'use strict';

var add = function add() {
  var sum = 0, i = 0, args = arguments, l = args.length;

  while (i < l) {
      sum += args[i++];
  }
  return sum;
};

module.exports.add = add;
