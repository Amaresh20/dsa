function commonElem(nums1, nums2) {
  let set1 = new Set();
  let set2 = new Set();
  for (let i = 0; i < nums1.length; i++) {
    set1.add(nums1[i]);
  }
  for (let j = 0; j < nums2.length; j++) {
    set2.add(nums2[j]);
  }
  let count1 = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (set2.has(nums1[i])) {
      count1++;
    }
  }
  let count2 = 0;
  for (let j = 0; j < nums2.length; j++) {
    if (set1.has(nums2[j])) {
      count2++;
    }
  }
  return [count1, count2];
}
const nums1 = [2, 3, 2];
const nums2 = [1, 2];
console.log(commonElem(nums1, nums2));
