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

    if (data < this.data && this.left !== null) {
        return this.left.has(data);
    }

    if (data > this.data && this.right !== null) {
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
}

module.exports = {
  Node
};