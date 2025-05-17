class Stack{
    constructor(){
        this.item=[]
    }
    push(value){
        this.item.push(value)
    }

    pop(){
        return this.item.pop()
    }

    peek(){
        return this.item[this.item.length-1]
    }

    isEmpty(){
        return this.item.length==0
    }

    size(){
        return this.item.length
    }

    display(){
        console.log(this.item)
    }
}

let stk=new Stack()
stk.push(1)
stk.push(2)
stk.push(3)
stk.push(4)
stk.pop()
console.log(stk.peek())

stk.display()
