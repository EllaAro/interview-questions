/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    
    if ( l1 === null ) return l2;
    
    if ( l2 === null ) return l1;
    
    const res = new ListNode(0);
    
    let carry = 0, currSum = 0, p = res;
        
    while ( l1 !== null || l2 !== null ) {
        
        if ( l1 !== null ) currSum += l1.val;
            
        if ( l2 !== null ) currSum += l2.val;
        
        currSum += carry;
        
        p.next = new ListNode(currSum % 10 );
        
        carry = Math.floor( currSum / 10 );
        
        currSum = 0;
        
        p = p.next;
        
        if ( l1 !== null ) l1 = l1.next;
        
        if ( l2 !== null ) l2 = l2.next;
        
    }
        if ( carry === 1 ) p.next = new ListNode(carry);
        return res.next;
   
};
