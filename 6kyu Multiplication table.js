let multiplicationTable = function (size) {
  let res = [];
  for (let i = 1; i <= size; i++) {
    let tmp = [];
    for (let j = 1; j <= size; j++) {
      tmp.push(i * j);
    }
    res.push(tmp);
  }
  return res;
};
