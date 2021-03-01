// Given a binary array, find the maximum number of consecutive 1s in this array.

// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.
// Note:

// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000

const arr = [1, 0, 1, 1, 0, 1];

var findMaxConsecutiveOnes = function (nums) {
    let maximumNumber = 0;
    let maximum = 0;

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];

        if (element === 1) maximum++
        else maximum = 0;

        if (maximum >= maximumNumber) maximumNumber = maximum;
    }

    return maximumNumber;
};

const result = findMaxConsecutiveOnes(arr);
console.log(`result: ${result}`)


