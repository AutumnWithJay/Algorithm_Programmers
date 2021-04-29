function solution(n) {
  const triNumber = Number(n).toString(3).split('').reverse().join('');
  return parseInt(triNumber, 3);
}

console.log(solution(45));
