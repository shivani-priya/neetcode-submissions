/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if(list1 == null){
            return list2;
        }
        if(list2 == null){
            return list1;
        }
        let dummyNode = new ListNode(-101)
        let currentNode = dummyNode;
        
        while(list1 != null && list2 !=null){

            if(list1.val < list2.val){

                currentNode.next = list1;//R1 // R4
                list1 = list1.next;//R2 //R4 //null
            }else{
                currentNode.next = list2; //G1 //
                list2 = list2.next; //G3 //G5
            }
            currentNode = currentNode.next; //G1 //R2 //G3 //R4
        }
        if(!list1){
            currentNode.next = list2;
        }
        if(!list2){
            currentNode.next = list1;
        }
      return dummyNode.next;
    }
}
