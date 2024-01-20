// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
      this.queue = [];
    }
  
    // Method to add an element to the queue
    add(element) {
      this.queue.push(element);
    }
  
    // Method to remove and return the element from the front of the queue
    remove() {
      if (this.queue.length === 0) {
        // Return undefined if the queue is empty
        return undefined;
      }
      return this.queue.shift();
    }
  }
  
  module.exports = Queue;
