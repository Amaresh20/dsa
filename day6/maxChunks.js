function maxChunks(nums) {
  let maxNumber = 0;
  let chunkCount = 0;
  for (let i = 0; i < nums.length; i++) {
    maxNumber = Math.max(nums[i], maxNumber);
    if (i == maxNumber) {
      chunkCount++;
    }
  }
  return chunkCount;
}
const nums = [1, 0, 2, 3, 4];
console.log(maxChunks(nums));
