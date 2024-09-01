function jewelStone(jewels, stones) {
  let map = new Map();
  for (let i = 0; i < stones.length; i++) {
    if (map.has(stones[i])) {
      map.set(stones[i], map.get(stones[i]) + 1);
    } else {
      map.set(stones[i], 1);
    }
  }
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    if (map.has(jewels[i])) {
      count = count + map.get(jewels[i]);
    }
  }
  return count;
}
const jewels = "xy";
const stones = "XYxybqxy";
console.log(jewelStone(jewels, stones));
