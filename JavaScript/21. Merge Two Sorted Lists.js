//     You are given the heads of two sorted linked lists list1 and list2.
//
//     Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
//
//     Return the head of the merged linked list.

//     Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
    let mergedList = new ListNode(0);
    let head = mergedList;

    if (list1 === null) head.next = list2;

    if (list2 === null) head.next = list1;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            head.next = list1;
            list1 = list1.next;
        } else {
            head.next = list2;
            list2 = list2.next;
        }
        head = head.next;
    }
    head.next = list1 || list2;

    return mergedList.next;
};