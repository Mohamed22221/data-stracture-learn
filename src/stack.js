'use strict';
//Implementing Javascript Stack Using an Array (lifo)
//example =>>>> 1

class Stack {
    constructor() {
      this.items = []
    }
    push(element) {
      this.items.push(element)
    }
    pop() {
      return this.items.pop()
    }
    top() {
      return this.items[this.items.length - 1]
    }
    size() {
      return this.items.length
    }
    empty() {
      return this.items.length === 0
    }
    print() {
      return this.items.toString()
    }
  }
  let stackOne = new Stack()
  stackOne.push('mo')
  stackOne.push('hamdy')
  stackOne.pop()
  stackOne.push('ahmed')
  
  console.log("items =>" ,stackOne.items)
  console.log("top =>" ,stackOne.top())
  console.log("size =>" ,stackOne.size())
  console.log("empty =>" ,stackOne.empty())
  console.log("print =>" ,stackOne.print())
  
  
  //example =>>>> 2
  //Reverse a string using a JavaScript stack
  function reverse(text) {
    //loop in string
    let stack = []
    for (let i = 0; i < text.length; i++) {
      stack.push(text[i])
    }
    //reverse string
    let reverseText = ""
    while(stack.length > 0){
      reverseText += stack.pop()
    }
    return reverseText
  }
  console.log("reverse => " ,reverse("hamdy"))
  