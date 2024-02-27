const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  if (!l) {
    return null;
  }

  let currentItem = l;
  let parrentItem = null;
  let isFirstElem = true;
  while (currentItem) {
    if (currentItem.value === k) {
      if (isFirstElem) {
        l = l.next;
        currentItem = l;
      } else if (currentItem.next === null) {
        parrentItem.next = null;
      } else {
        parrentItem.next = currentItem.next;
        currentItem = currentItem.next;
        continue;
      }
    }
    if (isFirstElem) {
      isFirstElem = false;
    }
    parrentItem = currentItem;
    currentItem = currentItem.next;
  }

  return l;
}

module.exports = {
  removeKFromList
};
