function solution(arr) {
  let result = 0;
  arr.map((value) => {
    result += value;
  });
  return result / arr.length;
}
