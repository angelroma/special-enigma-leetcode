const nums = [1, 2, 3, 4, 5];

function removeAtEnd(array) {
    array.length = array.length - 1
    return array;
}

function removeAtStart(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i+1]
    }
    array.length = array.length - 1
    return array;
}

function removeAt(array, index) {
    for (let i = index; i < array.length; i++) {
        array[i] = array[i+1]
    }
    array.length = array.length - 1
    return array;
}

// console.log(removeAtEnd(nums))
//console.log(removeAtStart(nums))
// console.log(removeAt(nums, 3))