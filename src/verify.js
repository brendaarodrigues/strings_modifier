var charArray = ["ab", "ac", "ba", "bc", "ca", "cb"];

function verifyString(string) {
  return charArray.some((element) => string.includes(element))
}

export default verifyString
