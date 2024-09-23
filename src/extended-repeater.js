const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = options.addition !== undefined ? String(options.addition) : null;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  let strArr = [];
  let additionArr = [];

  if (addition) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionArr.push(addition)
    }
  }
  str += additionArr.join(additionSeparator);

  for (let i = 0; i < repeatTimes; i++) {
    strArr.push(str)
  }

  return strArr.join(separator);
}

module.exports = {
  repeater
};
