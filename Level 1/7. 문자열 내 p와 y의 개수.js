function solution(s) {
  var answer = true;
  var str = s.toLowerCase().split("");
  var p = [],
    y = [];

  for (var i = 0; i < str.length; i++) {
    if (str[i] === "p") {
      p.push(str[i]);
    } else if (str[i] === "y") {
      y.push(str[i]);
    }
  }
  p.length === y.length ? (answer = true) : (answer = false);

  return answer;
}
