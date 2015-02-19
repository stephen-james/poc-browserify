var add = require('app/math').add;

exports.increment = function(val) {
  return add(val, 1);
};
