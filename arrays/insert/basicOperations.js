const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const insertAtStart = function (array, num) {
    const len = array.length -1
    for (let i = len; i >= 0; i--) {
        array[i+1]= array[i]
    }
    array[0] = num
    return array
}

const insertAtEnd = function (array, num){
    const len = array.length;
    array[len] = num;
    return array
}

const insertAtIndex = function (array, index, num) {
    const len = array.length - 1
    for (let i = len ; i >=index; i--) {
        array[i+1]= array[i]
    }
    array[index] = num
    return array
}

// console.log(insertAtStart(nums,14))
// console.log(insertAtEnd(nums,14))
// console.log(insertAtIndex(nums,4, 14))
