class queue{
    constructor(){
        this.item=[]
    }
    enqueue(val){
        this.item.push(val)
    }
    dequeue(){
        return this.item.shift()
    }
    front(){
        this.item[0]
    }
    print(){
        
            console.log(this.item)
            
    }

}

const q=new queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)

console.log(q.dequeue())
console.log(q.front())
q.print()