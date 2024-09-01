function jewelStone(jewels, stones) {
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    let currJewel = jewels.charAt(i);
    for (let j = 0; j < stones.length; j++) {
      if (currJewel === stones.charAt(j)) {
        count++;
      }
    }
  }
  return count;
}
const jewels = "xy";
const stones = "XYxybqxy";
console.log(jewelStone(jewels, stones));
