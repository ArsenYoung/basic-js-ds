class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  add(data) {
      if (data < this.data) {
          this.addLeft(data);
      } else {
          this.addRight(data);
      }
  }

  addLeft(data) {
      if (this.left) {
          return this.left.add(data)
      }
      this.left = new Node(data);
  }

  addRight(data) {
      if (this.right) {
          return this.right.add(data)
      }
      this.right = new Node(data);
  }

  has(data) {
    if (this.data === data) {
      return true;
    }

    if (data < this.data && this.left) {
        return this.left.has(data);
    }

    if (data > this.data && this.right) {
        return this.right.has(data);
    }

    return false;
  }

  find(data) {
    if (data === this.data) {
      return this;
    }

    if (data < this.data && this.left !== null) {
      return this.left.find(data);
    }

    if (data > this.data && this.right !== null) {
      return this.right.find(data);
    }

    return null;
  }

  remove(data, parentNode) {
    if (this.data === data) {
      
      if (!this.left && !this.right) { // the case when a found node is leaf 
        
        if (this === parentNode.left) {
          parentNode.left = null;
        } else {
          parentNode.right = null;
        }

        return;
      }

      if (!this.left) { // the case when a found node doesn't have left child
        
        if (this === parentNode.left) {
          parentNode.left = this.right;
        } else {
          parentNode.right = this.right;
        }

        return;
      }

      if (!this.right) { // the case when a found node doesn't have right child
        
        if (this === parentNode.left) {
          parentNode.left = this.left;
        } else {
          parentNode.right = this.left;
        }

        return;
      }

      let min = this.right;
      let parentOfMin = this;
      while (min.left) {
        parentOfMin = min;
        min = min.left;
      }

      this.data = parentOfMin.left.data;
      
      if (parentOfMin.left.right) {
        parentOfMin.left = parentOfMin.left.right;
      } else {
        parentOfMin.left = null;
      }
    }

    if (data < this.data && this.left) {
      this.left.remove(data, this);
    }

    if (data > this.data && this.right) {
      this.right.remove(data, this);
    }
    
  }
}

module.exports = {
  Node
};