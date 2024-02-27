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

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};