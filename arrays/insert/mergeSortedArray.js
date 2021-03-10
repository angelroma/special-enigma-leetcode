// Merge Sorted Array

// Solution
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[i] <= 109

const nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
//const nums1 = [1], m = 1, nums2 = [], n = 0

function bubbleSorting(array) {
    const len = array.length - 1;
    for (let i = len; i >= 0; i--) {
        for (let j = i; j < len; j++) {
            const a = array[j]
            const b = array[j + 1]
            if (a > b) {
                array[j] = b
                array[j + 1] = a
            }
        }
    }
    return array;
}

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
    const len = m + n;
    let init = 0;
    for (let i = m; i < len; i++) {
        console.log(i)
        nums1[i] = nums2[init]
        init = init + 1
    }
    nums1 = bubbleSorting(nums1)
    return nums1
};

// console.log(merge(nums1, m, nums2, n))
const result = nums1.splice(m, 1, 32)
console.log("result", result)





// console.log(bubbleSorting(nums1))
