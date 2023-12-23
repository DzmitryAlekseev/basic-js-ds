const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

console.log('test1');

class BinarySearchTree {

  constructor() {
    this.currentNode= null;
  }

  root() {
    if(!this.currentNode){
      return null;
    }

    return this.currentNode;
  }

  add(data) {
    this.currentNode = addItem(this.currentNode, data);

    function addItem(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addItem(node.left, data);
      } else {
        node.right = addItem(node.right, data);
      }

      return node;
    }

  }

  has(data) {
    return searchItem(this.currentNode, data);

    function searchItem(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ?
      searchItem(node.left, data):
      searchItem(node.right, data);

    }
  }

  find(data) {

    return findItem(this.currentNode, data);

    function findItem(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ?
      findItem(node.left, data):
      findItem(node.right, data);
    }
  }

  remove(data ) {
    this.currentNode = removeItem(this.currentNode, data);

    function removeItem(node, data){
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeItem(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeItem(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right) {
          return null;
        }
        if(!node.left) {
          node = node.right;
          return node;
        } 

        if(!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while(minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;

        node.right = removeItem(node.right, minRight.data);

        return node;
      }

    }
  }

  min() {
    if (!this.currentNode) {
      return;
    }

    let node = this.currentNode;
    while(node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.currentNode) {
      return;
    }

    let node = this.currentNode;
    while(node.right) {
      node = node.right;
    }

    return node.data;
  }
}

// const tree = new BinarySearchTree();
// tree.add(4);
// tree.add(2);
// tree.add(3);
// tree.add(7);
// tree.add(5);
// tree.add(1);

// console.log(tree.min());
// console.log(tree.max());

// console.log(tree.add(3));

module.exports = {
  BinarySearchTree
};