const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direct = true) {
    //this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.direct = direct;
  }

  encrypt(text, key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }

    text = text.toUpperCase();
    key = key.toUpperCase();
    
    let cipherKey = this.createKeyStr(text, key);

    let str = '';
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
      if((/[A-Z]/g).test(text[i])) {
        str += this.getCipherSymbol(text[i], cipherKey[keyIndex], true);
        keyIndex++;
      }
      else {
        str += text[i];
      }
        
    }

    return this.direct ? str : str.split('').reverse().join('');

  }
  decrypt(text, key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }
    text = text.toUpperCase();
    //text = this.direct ? text : text.split('').reverse().join('');
    key = key.toUpperCase();
    
    let cipherKey = this.createKeyStr(text, key);

    let str = '';
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
      if((/[A-Z]/g).test(text[i])) {
        str += this.getCipherSymbol(text[i], cipherKey[keyIndex], false);
        keyIndex++;
      }
      else {
        str += text[i];
      }
        
    }
    return this.direct ? str : str.split('').reverse().join('');
  }

  createKeyStr(text, key) {

    const repeater = Math.trunc(text.length / key.length)
    const tail = text.length % key.length;
    let str = key.repeat(repeater);

    for (let i = 0; i < tail; i++) {
        str += key[i];
    }

    return str;
  }

  createNewAlphabet(symbol) {
      const parts = this.alphabet.split(symbol);
      return symbol + parts[1] + parts[0];
  }

  /* getCipherSymbol(symbol, newAlphabet) {
      const symbolKey = Object.keys(this.alphabet).find(k => this.alphabet[k] === symbol);
      return newAlphabet[symbolKey];
  }

  getDeCipherSymbol(symbol, newAlphabet) {
    const symbolKey = Object.keys(newAlphabet).find(k => newAlphabet[k] === symbol);
    return this.alphabet[symbolKey];
  } */
    getCipherSymbol(symbol, keySymbol, encrypt = true) {
		
      const alphabetLength = 26;
      const alphabetStart = 'A'.charCodeAt(0); 

      const symbolCode = symbol.charCodeAt(0);

      const shiftAmount = keySymbol.charCodeAt(0) - alphabetStart;
      

      if (encrypt) {
        return String.fromCharCode(((symbolCode - alphabetStart + shiftAmount) % alphabetLength) + alphabetStart);
        
      } else {
        return String.fromCharCode(((symbolCode - alphabetStart - shiftAmount + alphabetLength) % alphabetLength) + alphabetStart);
        
      }
	  }
  
}

module.exports = {
  VigenereCipheringMachine
};
