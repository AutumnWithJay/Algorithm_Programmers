const solution = (n) => {
  let result = 0;

  String(n)
    .split("")
    .map((key) => {
      result += Number(key);
    });
  return result;
};
