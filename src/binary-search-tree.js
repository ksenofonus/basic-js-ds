const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.head = null;
  }
  root() {
    return this.head;
  }

  add(data) {
    this.head = addData(this.head, data)
    function addData (node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;
      data < node.data
        ? node.left = addData(node.left, data)
        : node.right = addData(node.right, data)
      return node;
    }
  }

  has(data) {
    return searchData(this.head, data)
    function searchData (node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      return data < node.data
        ? searchData(node.left, data)
        : searchData(node.right, data)
    }
  }

  find(data) {
    return findNode(this.head, data);
    function findNode (node, data) {
      if (!node) return null;
			if (node.data === data) return node;
			return data < node.data
				? findNode(node.left, data)
				: findNode(node.right, data);
    }
  }

  remove(data) {
    this.head = removeNode(this.head, data);
    function removeNode (node, data) {
      if (!node) return null;
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
          if (!node.left && !node.right) return null;
          if (!node.left) {
            node = node.right;
            return node;
          }
          if (!node.right) {
            node = node.left;
            return node;
          }
          let minFromRightChild = node.right;
          while (minFromRightChild.left) {
            minFromRightChild = minFromRightChild.left
          }
          node.data = minFromRightChild.data;
          node.right = removeNode(node.right, minFromRightChild.data);
          return node;
      }
    }
  }

  min() {
    if (!this.head) return null;
    let node = this.head;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.head) return null;
    let node = this.head;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};