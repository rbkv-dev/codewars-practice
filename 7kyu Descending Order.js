function descendingOrder(n) {
  function quickSort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
      if (pivot < arr[i]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat(pivot, quickSort(right));
  }
  let tmp = 0;
  let _tmp = quickSort(String(n));

  for (let i = 0; i < _tmp.length; i++) {
    tmp += _tmp[i] * 10 ** (_tmp.length - 1 - i);
  }
  return tmp;
}
