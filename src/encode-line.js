const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = [];
  let counter = 1;
  let prev = str[0];
  
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === prev) {
      counter++;
    } 
    else {
      if (counter === 1) {
        arr.push(prev);
      } 
      else {
        arr.push(counter + prev);
      }
      prev = str[i];
      counter = 1;
    }
  }
  return arr.join('');
}

module.exports = {
  encodeLine
};
