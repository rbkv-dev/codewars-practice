function persistence(n) {
  var answer = 0;
  function main(n) {
    let str = Array.from(String(n));
    if (str.length < 2) return answer;

    answer += 1;
    new_str = str.reduce((accum, cur) => +cur * +accum, 1);
    main(new_str);
    return answer;
  }
  answer = main(n);
  return answer;
}
