const solution = (x) => {
  let plusNum = 0;
  x.toString()
    .split("")
    .map((value) => (plusNum += Number(value)));
  return x % plusNum === 0 ? true : false;
};
