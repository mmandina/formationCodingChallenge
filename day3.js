// Given a linked list, reverse groups of k nodes. These groups will remain in order themselves. For example, if we perform this operation with k=2 on the following list:

// 1 -> 2 -> 3 -> 4-> 5

// The result will be:

// 2 -> 1 -> 4 -> 3 -> 5

//3-2-1-4-5

// Once again, this should be done in-place, just re-assigning the next pointers in the nodes and returning the new head. The head parameter will be a list of some length (possibly zero) and k will be a positive integer.

 class LLNode {
   constructor(value, next = null) {
     this.value = value;
     this.next = next;
   }
 }
 let head= new LLNode(1,new LLNode(2, new LLNode(3,new LLNode(4, new LLNode(5)))))

function printList(head){
    let values=[];
    let ptr=head;
    console.log(ptr.value)
    while(ptr){
        values.push(ptr.value)
        ptr=ptr.next
    }
    return values;
}

function reverseInGroupsOfK(head, k) {
    /* your code here */
    if(head.next===null){
        return head;
    }
    if(k===1){
        return head;
    }
    let location=1;
    let pointers=[];
    let ptr=head;
    let newHead=null;
    while(ptr){
   pointers.push(ptr)
    ptr=ptr.next;
    location++;
    if(location===k){
        rest=ptr.next;
        newHead=ptr;
        ptr=newHead;
        while(pointers.length>0){
            ptr.next=pointers.pop()
            ptr=ptr.next;
        }
      ptr.next=rest;
      console.log(printList(newHead))
      return newHead
      
    }
    }
    printList(head)
    //return  head;
  }
  console.log(reverseInGroupsOfK(head,5))