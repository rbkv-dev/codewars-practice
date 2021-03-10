function spinWords(string) {
  let worlds = string.split(" ");
  worlds.map((world, index) => {
    if (world.length >= 5) {
      worlds[index] = world.split("").reverse().join("");
    }
  });
  return worlds.join(" ");
}
