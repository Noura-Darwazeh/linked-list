
var removeNthFromEnd = function (head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;

    for (let i = 1; i <= n + 1; i++) {
        second = second.next;
    }

    while (second !== null) {
        first = first.next;
        second = second.next;
    }
    first.next = first.next.next;
    return dummy.next;
};