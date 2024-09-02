function productArray(nums) {
  //prefix product array
  let prefixProduct = 1;
  let prefixProductArray = [];
  for (let i = 0; i < nums.length; i++) {
    prefixProduct = prefixProduct * nums[i];
    prefixProductArray.push(prefixProduct);
  }
  //suffix product array
  let suffixProduct = 1;
  let suffixProductArray = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    suffixProduct = suffixProduct * nums[i];
    suffixProductArray[i] = suffixProduct;
  }
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let pp = 1;
    let sp = 1;
    if (i >= 1) {
      pp = prefixProductArray[i - 1];
    }
    if (i < nums.length - 1) {
      sp = suffixProductArray[i + 1];
    }
    res.push(pp * sp);
  }
  return res;
}
const nums = [1, 2, 4, 5];
console.log(productArray(nums));
