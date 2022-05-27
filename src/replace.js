function replaceChar(string) {
    if (string.includes("ab")) return string.replace("ab", "c");
    if (string.includes("ac")) return string.replace("ac", "b");
    if (string.includes("ba")) return string.replace("ba", "c");
    if (string.includes("bc")) return string.replace("bc", "a");
    if (string.includes("ca")) return string.replace("ca", "b");
    if (string.includes("cb")) return string.replace("cb", "a");

  }

export default replaceChar