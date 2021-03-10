 const nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
//const nums1 = [1], m = 1, nums2 = [], n = 0

nums1.length = m
nums1.splice(m, 0, ...nums2)
nums1.sort((a, b)=>a-b)

console.log("result",nums1)
