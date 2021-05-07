/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

let input = {
    val: 1,
    next: {
        val: 2,
    }
}

input.next.next = input

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    let index = 0;
    let slow = head
    let fast = head
    
    while (fast !== null && fast.next !== null) {
        slow = slow
        fast = fast.next

        console.log(slow.val, fast.val, )
        
        if (slow === fast) return true
        console.log(`index: ${index}`)
        index++;
    }
    
    return null
};

const result = hasCycle(input);

console.log(result)