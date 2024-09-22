const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = n.toString();
  let output = 0;
  for (let i = 0; i < n.length; i++) {
    let newN = parseInt(n.slice(0, i) + n.slice(i+1));
    if (newN > output) {
      output = newN;
    }
  }
  return output;
}

module.exports = {
  deleteDigit
};
