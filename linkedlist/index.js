// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(data){
    this.head = new Node(data, this.head);
  }

  size(){
    let counter = 0;
    let node = this.head;

    while(node){
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst(){
    return this.head;
  }

  getLast(){
    if(!this.head){
      return null;
    }

    let node = this.head;

    while(node){
      if(!node.next){
        return node;
      }
      node = node.next;
    }
  }

  clear(){
    this.head = null;
  }

  removeFirst(){
    if(!this.head){
      return;
    }
    this.head = this.head.next;
  }

  removeLast(){
    if(!this.head){
      return;
    }

    if(!this.head.next){
      this.head = null;
      return;
    }

    let node = this.head;
    let previousNode = node;

    while(node.next){
      previousNode = node;
      node = node.next;
    }

    previousNode.next = null;
  }

  insertLast(data){
    const node = new Node(data);

    if(!this.head){
      //there are no nodes in list.
      this.head = node;
    }else{
      this.getLast().next = node;
    }
  }





}

module.exports = { Node, LinkedList };

// //alternative version
// getLast(){
//   let node = this.head;
//   let previousNode = node;
//
//   while(node){
//     previousNode = node;
//     node = node.next;
//   }
//   return previousNode;
// }
