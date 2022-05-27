import verifyString from './verify.js'
import replaceChar from './replace.js'

function loop(string) {
  while (verifyString(string)) {
    string = replaceChar(string);
  }
  return string
}

export default loop