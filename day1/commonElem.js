function findIntersectionValues(nums1, nums2) {
  let count1 = 0;
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j]) {
        count1++;
        break;
      }
    }
  }
  res.push(count1);
  let count2 = 0;
  for (let i = 0; i < nums2.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      if (nums2[i] == nums1[j]) {
        count2++;
        break;
      }
    }
  }
  res.push(count2);
  return res;
}
const nums1 = [2, 3, 2];
const nums2 = [1, 2];
console.log(findIntersectionValues(nums1, nums2));
