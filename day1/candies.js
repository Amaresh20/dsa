function kidsWithCandies(candies, extraCandies) {
  let max = -Infinity;
  for (let i = 0; i < candies.length; i++) {
    if (max < candies[i]) {
      max = candies[i];
    }
  }
  let res = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      res.push(true);
    } else {
      res.push(false);
    }
  }
  return res;
}
const candies = [2, 3, 5, 1, 3];
let extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));
