function findShort(s) {
  // let worlds = s.split(" ");
  // s.split(" ").sort((a, b) => a.length - b.length);
  // return worlds[0].length;

  return s.split(" ").sort((a, b) => a.length - b.length)[0].length;
}
