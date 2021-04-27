const solution = (s, n) => {
  return s
    .split("")
    .map((word) => {
      const wordCharcode = word.charCodeAt();
      if (wordCharcode === 32) return " ";
      if (wordCharcode >= 65 && wordCharcode <= 90) {
        if (wordCharcode + n > 90) {
          return String.fromCharCode(wordCharcode + n - 26);
        } else {
          return String.fromCharCode(wordCharcode + n);
        }
      }
      if (wordCharcode >= 97 && wordCharcode <= 122) {
        if (wordCharcode + n > 122) {
          return String.fromCharCode(wordCharcode + n - 26);
        } else {
          return String.fromCharCode(wordCharcode + n);
        }
      }
    })
    .join("");
};

console.log(solution("z", 1));
