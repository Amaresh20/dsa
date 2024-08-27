function countKDifference(nums, k) {
  let map = new Map();
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
    if (map.has(nums[i] + k)) {
      count = count + map.get(nums[i] + k);
    }
    if (map.has(nums[i] - k)) {
      count = count + map.get(nums[i] - k);
    }
  }
  return count;
}
const nums = [1, 2, 2, 1];
let k = 1;
console.log(countKDifference(nums, k));
