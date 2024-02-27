const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  rootNode
  root() {
    if (this.rootNode === undefined) {
        return null;
    }

    return this.rootNode;
  }

  add(data) {
    if (this.rootNode) {
        return this.rootNode.add(data);
    }       
    this.rootNode = new Node(data);
  }

  has(data) {
    if (this.rootNode.data === data) {
        return true;
    }

    if (data < this.rootNode.data) {
        return this.rootNode.left.has(data);
    }

    if (data > this.rootNode.data) {
        return this.rootNode.right.has(data);
    }
  }

  find(data) {
    if (data === this.rootNode.data) {
      return this.rootNode;
    }

    if (data < this.rootNode.data) {
      return this.rootNode.left.find(data);
    }

    if (data > this.rootNode.data) {
      return this.rootNode.right.find(data);
    }
  }

  remove(data) {
    if (this.rootNode) {
      this.rootNode.remove(data, this.rootNode);
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    if (!this.rootNode.left) {
      return this.rootNode.data;
    }

    let end = this.rootNode.left;
    while (end.left !== null) {
      end = end.left;
    }
    
    return end.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    if (!this.rootNode.right) {
      return this.rootNode.data;
    }
    
    let end = this.rootNode.right;
    while (end.right !== null) {
      end = end.right;
    }
    
    return end.data;
  }
}

module.exports = {
  BinarySearchTree
};