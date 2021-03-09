const ROMAN_NUMBERS = {
  CM: 900,
  M: 1000,
  CD: 400,
  D: 500,
  XC: 90,
  C: 100,
  XL: 40,
  L: 50,
  IX: 9,
  X: 10,
  IV: 4,
  V: 5,
  I: 1,
};

function solution(roman) {
  roman = roman.toUpperCase();
  let index = 0;
  let number = 0;
  for (let key in ROMAN_NUMBERS) {
    index = roman.indexOf(key);
    while (index != -1) {
      number += parseInt(ROMAN_NUMBERS[key]);
      roman = roman.replace(key, "-");
      index = roman.indexOf(key);
    }
  }
  return number;
}

module.exports = solution;
