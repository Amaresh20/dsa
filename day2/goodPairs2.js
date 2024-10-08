function goodPairs(nums) {
  let map = new Map();
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      count = count + map.get(nums[i]);
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  return count;
}
const nums = [1, 2, 3, 1, 1, 3];
console.log(goodPairs(nums));
