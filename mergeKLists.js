/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = (lists) => {
  // check for corner cases
  if (lists.length === 0 || lists === undefined) return null;

  let interval = 1;
  while (interval < lists.length) {
    for (let i = 0; i + interval < lists.length; i = i + interval * 2) {
      lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
    }
    interval *= 2;
  }
  return lists[0];
};

const mergeTwoLists = (l1, l2) => {
  let res = new ListNode(0);
  let ans = res;
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      res.next = l1;
      l1 = l1.next;
    } else {
      res.next = l2;
      l2 = l2.next;
    }
    res = res.next;
  }

  l1 === null ? (res.next = l2) : (res.next = l1);

  return ans.next;
};
