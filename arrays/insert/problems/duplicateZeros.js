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
const input = [1,0,2,3,0,4,5,0]

function duplicateZeros(arr){
    const len = arr.length-1 //Removing it will increase the array size and not limiting to the current array original size
    for (let i = 0; i < len; i++) {
        const element = arr[i];

        console.log("index", i)

        if(element === 0) {
           arr =  insertAtIndex(arr,len, i, 0);
           console.log("array", arr)
           i++;
        }
    }

    return arr;
}


function insertAtIndex(array, len ,index, number){
    
    for (let i = len-1; i >= index; i--) {
        array[i+1] =  array[i]
    }
    array[index] = number;
    return array
}

// console.log(insertAtIndex(input, 2, 13))
console.log(duplicateZeros(input))