const solution = (n) => {
  let sortNum = n.toString().split("").sort().reverse().join("");
  return Number(sortNum);
};
