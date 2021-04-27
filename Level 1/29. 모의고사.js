const solution = (answers) => {
  let answer = [];
  let count = [0, 0, 0];
  const answerPatterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];

  for (let i = 0; i < answers.length; i++) {
    console.log(answerPatterns[0][i % 5]);
    if (answers[i] === answerPatterns[0][i % 5]) count[0]++;
    if (answers[i] === answerPatterns[1][i % 8]) count[1]++;
    if (answers[i] === answerPatterns[2][i % 10]) count[2]++;
  }

  for (let i = 0; i < count.length; i++) {
    if (count[i] === Math.max(...count)) {
      answer.push(Number(i) + 1);
    }
  }

  return answer;
};

solution([1, 2, 3, 4, 5]);
console.log(solution([1, 3, 2, 4, 2]));
