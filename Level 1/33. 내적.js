function solution(a, b) {
  let answer = 0;

  for (let i = 0; i < a.length; i++) {
    // return (answer += Number(a[i]) * Number(b[i]));
    answer += a[i] * b[i];
  }
  return answer;
}
