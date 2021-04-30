function solution(d, budget) {
  let answer = 0,
    sum = 0;
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    answer++;

    if (sum > budget) answer--;
  }

  return answer;
}

solution([1, 3, 2, 5, 4], 9);
// console.log(solution([2, 2, 3, 3], 4));
