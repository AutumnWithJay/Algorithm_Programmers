function solution(a, b) {
  var answer = 0;
  var bigNum, smallNum;

  if (a > b) {
    bigNum = a;
    smallNum = b;
  } else if (a < b) {
    bigNum = b;
    smallNum = a;
  } else {
    answer = a;
  }
  for (var i = smallNum; i <= bigNum; i++) {
    answer += i;
  }
  return answer;
}
