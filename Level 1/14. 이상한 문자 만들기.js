const solution = (s) => {
  return s
    .split(" ")
    .map((key) =>
      key
        .split("")
        .map((key, index) =>
          index % 2 == 0 ? key.toUpperCase() : key.toLowerCase()
        )
        .join("")
    )
    .join(" ");
};

console.log(solution("try hello world"));
