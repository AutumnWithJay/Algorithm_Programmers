const solution = (n) => {
  const sqrt = Math.sqrt(n);
  return sqrt === parseInt(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
};

console.log(solution(3));
