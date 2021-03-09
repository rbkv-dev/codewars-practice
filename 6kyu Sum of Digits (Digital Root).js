function digital_root(n) {
  let str = Array.from(String(n), Number);

  if (str.length < 2) return str[0];

  new_str = str.reduce((accum, cur) => accum + cur, 0);
  digital_root(new_str);
  return new_str;
}
