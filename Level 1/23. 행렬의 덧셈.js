const solution = (arr1, arr2) => {
  return arr1.map((value, index) =>
    value.map((val, index2) => val + arr2[index][index2])
  );
};

//  arr1[0][1], arr2[0][1]

console.log(
  solution(
    [
      [1, 2],
      [2, 3]
    ],
    [
      [3, 4],
      [5, 6]
    ]
  )
);
// solution([[1], [2]], [[3], [4]]);
