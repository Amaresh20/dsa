function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let a = nums[i];
    let b = target - a;
    if (map.has(b)) {
      return [map.get(b), i];
    } else {
      map.set(a, 0);
    }
  }
}
const nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));
