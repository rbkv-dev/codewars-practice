const solution = (x) => {
  const sorted = x.sort((a, b) => a - b);
  const grouped = sorted.map(
    (x, i, a) =>
      (i == a.findIndex((x2, i2) => i2 - x2 == i - x) &&
        a.filter((x2, i2) => i2 - x2 == i - x)) ||
      []
  );
  const ranged = grouped.map((x) =>
    x.length > 2 ? x[0] + "-" + x.slice(-1)[0] : x
  );

  return String([].concat(...ranged));
};
