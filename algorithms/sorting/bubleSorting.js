
function bubbleSorting(nums) {
    const len = nums.length - 1;

    for (let i = len; i > 0; i--) {
        for (let j = 0; j < i; j++) {

            const a = nums[j]
            const b = nums[j + 1]
            if (a > b) {
                nums[j + 1] = a
                nums[j] = b
            }
        }
    }

    return nums;
}

const arr = [4, 3, 2, 6, 1, 1]

const result = bubbleSorting(arr)

console.log(result)
