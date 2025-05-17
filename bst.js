class Node{
    constructor(value){
        this.value=value;
        this.right=null;
        this.left=null;
    }
}
class BST{
    constructor(){
        this.root=null
    }
    insert(value){
        const newNode=new Node(value);
        if(!this.root){
            this.root=newNode;
            return;
        }
        let current=this.root
        while(true){
            if(value<current.value){
                if(!current.left){
                    current.left=newNode;
                    return;
                }
                current=current.left
            }else{
                if(!current.right){
                    current.right=newNode;
                    return;
                }
                current=current.right;
            }
        }
    }
    include(val){
        let current=this.root;
        while(current){
            if(val==current.value)return true
            if(val<current.value){
                current=current.left
            }else{
                current=current.right
            }
        }
        return false
    }
    findClosest(target){
        let current=this.root;
        let closest=this.root.value
        while(current){
            if(Math.abs(target-current.value)<Math.abs(target-closest)){
                current=closest
            }
            if(target<current.value){
                current=current.left
            }else {
                current=current.right
            }
        }
        return closest
    }
    findMin(){
        let current=this.root
        if(!current)return null;
        while(current.left){
            current=current.left
        }
        return current.value
        
    }
    findMax(){
       let current=this.root;
       if(!current)return null;
       while(current.right){
           current=current.right
       }
       return current.value;
    }
    findHeight(current=this.root){
        if(!current)return -1;
        return 1+ Math.max(this.findHeight(current.left),this.findHeight(current.right))
    }
    preOrder(current=this.root){
        
            if (!current) return;
        console.log(current.value);
        this.preOrder(current.left);
        this.preOrder(current.right)
    }
    inOrder(current=this.root){
        if (!current) return;
        this.inOrder(current.left)
        console.log(current.value)
        this.inOrder(current.right)
    }
    postOrder(current=this.root){
        if(!current)return;
        this.postOrder(current.left);
        this.postOrder(current.right);
        console.log(current.value)
    }
    search(val,current=this.root){
        if(!current)return;
        if(val==current.value)return current
        return val<current.value ? this.search(val,current.left):this.search(val,current.right)
    }
     
}


const bst=new BST()
bst.insert(3)
bst.insert(2)
bst.insert(1)
bst.insert(83)
bst.insert(28)
bst.insert(51)
bst.insert(15)
bst.insert(75)

console.log(bst)

console.log(bst.include(1))
console.log(bst.findMin())
console.log(bst.findMax())
console.log(bst.findHeight())
console.log("\n")

bst.preOrder()
console.log("\n")
bst.inOrder()
console.log("\n")

bst.postOrder()
console.log("\n")
console.log(bst.search(3))
console.log("\n")

console.log(bst.isBST())