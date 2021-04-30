function solution(n, m) {
  let result = [];
  let gcd = 1,
    lcm = 1;

  // 최대공약수
  for (let i = 1; i < Math.max(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
    }
  }

  result[0] = gcd;

  // 최소공배수
  while (true) {
    if (lcm % n === 0 && lcm % m === 0) {
      break;
    }
    lcm++;
  }

  result[1] = lcm;
  return result;
}
