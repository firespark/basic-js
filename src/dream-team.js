const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let str = '';
  const codes = [];
  members.forEach(el => {
    if (typeof el === 'string' || el instanceof String) {
      el = el.trim();
      //codes.push(el[0].charCodeAt(0));
      codes.push(el[0].toUpperCase());
    }
  });
  const sorted = codes.sort((a, b) => a.localeCompare(b));
  return sorted.join('');
}

module.exports = {
  createDreamTeam
};
