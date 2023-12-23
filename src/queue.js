const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor (data){
    this.value = data;
    this.next = null;
  }
}

class Queue {

  constructor (){
    this.head = null;
    this.size = 0;
  }


  getUnderlyingList() {
    if(this.head === null){
      return null;
    }

    return this.head;
  }

  enqueue(value ) {
   
      let temp;

      if(this.head === null){
        this.head = new ListNode(value);
      } else {

        temp = this.head;

        while(temp.next) {
          temp = temp.next;
        }

        temp.next = new ListNode(value);
      }
        
      this.size++;
  }

  dequeue() {
    if(this.head === null){
      return null;
    }

    let temp = this.head.value;

    this.head = this.head.next;
    this.size--;

    return temp;
  }
}


module.exports = {
  Queue
};
