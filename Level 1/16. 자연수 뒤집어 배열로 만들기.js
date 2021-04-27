const solution = (n) => {
  return n
    .toString()
    .split("")
    .reverse()
    .map((value) => (value = parseInt(value)));
};
