// Valid Mountain Array

// Solution
// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// Example 1:

// Input: arr = [2,1]
// Output: false
// Example 2:

// Input: arr = [3,5,5]
// Output: false
// Example 3:

// Input: arr = [0,3,2,1]
// Output: true


// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 104

/**
 * @param {number[]} ar
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    if (arr.length < 3) return false;

    let status = 0;

    for (let i = 0; i < arr.length; i++) {
        if (status === 2 & arr[i] < arr[i + 1] || arr[i] === arr[i + 1] || arr[0] > arr[1]) return false; //edge cases
        if (arr[i] < arr[i + 1]) status = 1
        if (arr[i] > arr[i + 1] && (status === 1 || status === 2)) status = 2
    }

    return status === 2;
};

//const nums = [2, 1]
//const nums = [3, 5, 5]
//const nums = [0, 3, 2, 1]
//const nums = [1,3,2]
//const nums = [1, 1, 1, 1, 1, 1, 1, 2, 1]
//const nums = [2, 1, 2, 3, 5, 7, 9, 10, 12, 14, 15, 16, 18, 14, 13]
//const nums = [0, 3, 2, 1]

console.log(validMountainArray(nums))

//Notes: So what I've seen in this problem is that I did not take into consideration all of the edge cases.