class trienode{
    constructor(){
        this.children ={}
        this.isend = false
    }
}
class trie{
    constructor(){
        this.root = new trienode()
    }
    insert(word){
        let node = this.root
        for(let i of word){
            if(!node.children[i]){
                node.children[i]= new trienode()
            } 
            node = node.children[i]
        }
        node.isend = true
    }
    
    search(word){
            let node = this.root
        for(let i of word){
            if(!node.children[i]){
                return false
            }
            node = node.children[i]
        }
        return node.isend
    }
    delete(word){
        let deletehelper = (node,word,index)=>{
            if(index==word.length){
                if(!node.isend) return false
                node.isend = false
                return Object.keys(node.children).length==0
            }
            let char = word[index]
            let child = node.children[char]
            if(!child) return false
            let sdc = deletehelper(child,word,index+1)
            
            if(sdc){
                delete(node.children[char])
                return Object.keys(node.children).length==0 && !node.isend
            }
            return false
            
        }
        deletehelper(this.root,word,0)
    }
    autocomplication(prefix){
        let node = this.root
        for(let i of prefix){
            if(!node.children[i]){
            return false
            }
            node = node.children[i]
        }
        let result =[]
        let dfs = (currentnode,currentword)=>{
            if(currentnode.isend){
                result.push(currentword)
            }
            for(let i in currentnode.children){
                dfs(currentnode.children[i],currentword+i)
            }
        }
        dfs(node,prefix)
        console.log(result)
        
    }
}

let a= new trie()
a.insert("cat")
a.insert("cattle")
a.insert("candle")
a.insert("can")
console.log(a.search("cat"))
a.delete("can")
a.autocomplication("ca")