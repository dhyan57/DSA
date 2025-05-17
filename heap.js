class heap{
    constructor(){
        this.heap=[]
    }
    left(index){
        return (index*2)+1
    }
     right(index){
        return (index*2)+2
    }
     parent(index){
        return Math.floor((index-1)/2)
    }
    
    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }
    
    heapifyUp(index){
        let parent=this.parent(index)
        let heap=this.heap
        
        while(index>0&&heap[index]<heap[parent]){
            [heap[index],heap[parent]]=[heap[parent],heap[index]]
            index=parent
            parent=this.parent(index)
        }
    }
    
    delete(value){
        
        if(this.heap.length==0)return false
        if(this.heap.length==1)return this.heap.pop()
        let deleteval=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifyDown(0)
        return deleteval
        
    }
    
    heapifyDown(index){
        let small=index
        let left=this.left(index)
       let right=this.right(index)
        if(left>0&&this.heap[small]>this.heap[left]){
            small=left
        }
        if(right>0&&this.heap[small]>this.heap[right]){
            small=right 
        }
        if(small!==index){ 
            [this.heap[index],this.heap[small]]=[this.heap[small],this.heap[index]]
            this.heapifyDown(small)
        }
    }
    
    sort(){
        let temp=[...this.heap]
        let sort=[]
        while(this.heap.length){
            sort.push(this.delete())
        }
        this.heap=temp
        return sort
    }
    
    display(){
        console.log(this.heap)
    }
    
}

const h=new heap()
h.insert(2)
h.insert(12)
h.insert(3)
h.insert(42)
console.log(h.sort())
h.display()







