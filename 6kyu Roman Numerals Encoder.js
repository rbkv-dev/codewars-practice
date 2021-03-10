const ROMAN_NUMBERS = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function solution(num) {
  let res = "";
  for (i in ROMAN_NUMBERS) {
    while (num >= ROMAN_NUMBERS[i]) {
      res += i;
      num -= ROMAN_NUMBERS[i];
    }
  }
  return res;
}
