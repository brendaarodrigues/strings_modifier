function validateString(string, regex) {
  if (string.search(regex) === -1) return true;
  else return false;
}

export default validateString;
