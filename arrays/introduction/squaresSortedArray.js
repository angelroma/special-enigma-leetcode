// Squares of a Sorted Array

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

var bubbleSorting = function (nums) {
    const len = nums.length - 1;

    for (let i = len; i >= 0; i--) {
        // console.log(`array(${i}):${nums}`)

        for (let j = 0; j < i; j++) {
            // console.log(`--> inner(${j}):${nums}`)

            const a = nums[j]
            const b = nums[j + 1]

            if (a > b) {
                nums[j] = b;
                nums[j + 1] = a;
            }
        }
    }

    return nums;
}

var sortedSquares = function (nums) {

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];

        nums[i] = element * element;
    }

    var result = bubbleSorting(nums)

    return result;
};

const arr = [-7, -3, 2, 3, 11];

const result = sortedSquares(arr);

console.log(result);