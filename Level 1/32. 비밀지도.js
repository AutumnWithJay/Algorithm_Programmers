function solution(n, arr1, arr2) {
  let answer;

  const convertToBinArr1 = arr1.map((value) => value.toString(2));
  const convertToBinArr2 = arr2.map((value) => value.toString(2));

  console.log(convertToBinArr1);
  console.log(convertToBinArr2);

  answer = convertToBinArr1.map((val, idx) => {
    let sum = String(Number(val) + Number(convertToBinArr2[idx]));

    return ('0'.repeat(n - sum.length) + sum)
      .split('')
      .map((val) => (val === '0' ? ' ' : '#'))
      .join('');
  });

  return answer;
}

// console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
