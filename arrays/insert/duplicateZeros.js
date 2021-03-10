// Duplicate Zeros

// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written.

// Do the above modifications to the input array in place, do not return anything from your function.

// Example 1:

// Input: [1,0,2,3,0,4,5,0]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

// Example 2:

// Input: [1,2,3]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,2,3]

// Note:

//     1 <= arr.length <= 10000
//     0 <= arr[i] <= 9
const input = [1, 0, 2, 3, 0, 4, 5, 0]

var duplicateZeros = function (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        console.log("index", i)

        if (arr[i] === 0) {
            arr = insertAtIndex(arr, i, 0);
            console.log("array", arr)
            i++;
        }
    }

    return arr;
};

function insertAtIndex(array, index, number) {

    for (let i = array.length - 2; i >= index; i--) {
        array[i + 1] = array[i]
    }
    array[index] = number;
    return array
}

// console.log(insertAtIndex(input, 2, 13))
console.log(duplicateZeros(input))