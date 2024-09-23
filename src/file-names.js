const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const arr = [...names];
  
  arr.forEach((file, key) => {
    let counter = 0;
    let arr2 = [...arr];

    for (let i = key + 1; i < arr2.length; i++) {
      if (file === arr2[i]) {
        counter++
        arr[i] = `${arr[i]}(${counter})`
      }
    }
  })

  return arr;
}

/* function createName(name, arr) {
  if(arr.includes(name)) {

    let counter = 1;
    let nameLength = name.length;
    if (name[nameLength - 1] === ')' && name[nameLength - 3] === '(') {
      counter = parseInt(name[nameLength - 2]);
      counter++;
      
      name = name.substring(0, nameLength - 2) + counter + name.substring(nameLength - 1);
      createName(name, arr);
      
    }
    else {
      name += `(${counter})`;
    }
    
    
  }
  return name;
} */

module.exports = {
  renameFiles
};
