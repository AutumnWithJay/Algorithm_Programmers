function solution(s) {
  var answer = "";
  var divide = s.length / 2;
  if (s.length % 2 == 1) {
    answer = s.substring(divide, divide + 1);
    return answer;
  } else {
    answer = s.substring(divide - 1, divide + 1);
    return answer;
  }
}
