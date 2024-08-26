function countWithDiff(nums, k) {
  nums.sort((a, b) => b - a);
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] - nums[j] == k) {
        count++;
      }
    }
  }
  return count;
}
const nums = [1, 2, 2, 1];
let k = 1;
console.log(countWithDiff(nums, k));
