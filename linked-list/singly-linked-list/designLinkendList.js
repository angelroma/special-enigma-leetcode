/**
 * Initialize your data structure here.
 */
 var MyLinkedList = function() {
     this.size = 0
     this.head = null
};

 var Node = function(element){
    this.element =  element
    this.next = null
 }

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let current = this.head
    let counter = 0;

    if(index >= this.size || index < 0) return - 1

    while (counter < index) {
        counter++;
        current = current.next
    }

    console.log("get:",current.element)
    return current.element
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new Node(val)
    node.next = this.head
    this.head = node;
    this.size++
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = new Node(val)
    let current = this.head

    if(this.size === 0){
       return this.addAtHead(val)
    }
    else {
        while (current.next) {
            current = current.next
        }
    }

    current.next = node

    this.size++
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let node = new Node(val)
    let current = this.head
    let counter = 1

    if(index > this.size) throw new Error('Out of range')

    if(index === 0) return this.addAtHead(val)

    while (counter < index) {
        current = current.next
        counter++
    }

    node.next = current.next
    current.next = node

    this.size++
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let counter = 0;
    let current = this.head
    let previous;

    if((index+1) > this.size || index < 0) return

    while (counter < index) {
        previous = current
        counter++;
        current = current.next
    }
    if(index !== 0) {
        previous.next = current.next
        current = previous;
    }
    else {
        this.head = current.next
    }

    this.size--
    
};


MyLinkedList.prototype.print =  function(){
    let current = this.head
    let index = 0;
    console.log('Get Size:', this.size )

    while (current) {
        console.log(index, current.element )
        current =  current.next
        index++
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

let linkendList = new MyLinkedList()

linkendList.addAtHead(1)
linkendList.addAtTail(3)
linkendList.addAtIndex(1, 2)
linkendList.get(1)
linkendList.deleteAtIndex(1)
linkendList.get(1)

linkendList.print()