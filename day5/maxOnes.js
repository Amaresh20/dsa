function maxOne(nums) {
  let count = 0;
  let maxOnes = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      count = 0;
    } else if (nums[i] == 1) {
      count++;
      maxOnes = Math.max(count, maxOnes);
    }
  }
  return maxOnes;
}
const nums = [1, 1, 0, 1, 1, 1];
console.log(maxOne(nums));
