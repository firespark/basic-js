const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const keys = [];
  const values = [];
  const newArr = [];

  arr.forEach( (num, key) => {
    if (num == -1) {
        keys.push(key);
    }
    else {
        values.push(num);
    }
  });

  const sortedValues = values.sort((a, b) => a - b);

  for (var i = 0; i <= keys[keys.length - 1]; i++) {

      if (keys.includes(i)) {

        newArr.push(-1);
      }
      else {
        newArr.push(sortedValues[0]);
        sortedValues.shift();
      }
  }

  return [...newArr, ...sortedValues];
  
}

module.exports = {
  sortByHeight
};
