// Find All Numbers Disappeared in an Array

// Solution
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n

// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    let len = nums.length
    // console.log('len:', len)
    nums = new Float64Array(nums).sort()
    const result = []

    let tracker = 0;

    for (let i = 1; i <= len; i++) {
        const element = nums[tracker];
        // console.log(i, '-', element)

        if(i === nums[tracker+1]){
            tracker++
        }

        if(i !== nums[tracker]){
            // console.log('add:', i)
            result.push(i)
            continue;
        }
        
        tracker++
    }

    return result;
    
};

// [1,1,2,2] = 3, 4
// const nums = [4,3,2,7,8,2,3,1];
// const nums = [1,1,2,2]
const nums = [1, 1]

console.log(findDisappearedNumbers(nums))
