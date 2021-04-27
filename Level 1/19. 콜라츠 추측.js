function solution(num) {
  function calc(number, count) {
    if (count > 500) return -1;
    if (number === 1) return count;
    if (number % 2) {
      return calc(number * 3 + 1, count + 1);
    } else {
      return calc(number / 2, count + 1);
    }
  }
  return calc(num, 0);
}
