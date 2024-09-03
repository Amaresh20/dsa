function sum(left, right, nums) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    sum = sum + nums[i];
  }
  return sum;
}

function pivotIndex(nums) {
  for (let i = 0; i < nums.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    if (i >= 1) {
      leftSum = sum(0, i - 1, nums);
    }
    if (i < nums.length - 1) {
      rightSum = sum(i + 1, nums.length - 1, nums);
    }
    if (leftSum == rightSum) {
      return i;
    }
  }
  return -1;
}
const nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums));
