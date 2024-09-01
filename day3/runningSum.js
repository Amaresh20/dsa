function ruuningSum(nums) {
  let sum = 0;
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    res.push(sum);
  }
  return res;
}
let nums = [1, 2, 3, 4];
console.log(ruuningSum(nums));
