class hashTable{
    constructor(size){
        this.size=size
        this.table=new Array(size)
    }

    hash(key){
        let index=0
        for(let i=0;i<key.length;i++){
            index+=key.charCodeAt(i)
        }
        return index%this.size
    }

    set(key,value){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            let val=bucket.find((item)=>item[0]==key)
            if(val){
                val[1]=value
            }else{g
                bucket.push([key,value])
            }
        }
    }

    search(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(bucket){
            let val=bucket.find((item)=>item[0]==key)
            return val[1]
        }
    }

    delete(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        this.table[index] = bucket.filter((item) => item[0] !== key);
        return true
    }

    print(){
        for(let i=0;i<this.size;i++){
            console.log(i,this.table[i])
        }
    }
}

let tab=new hashTable(10)
tab.set("name","dhyan")
tab.set("anme","dhyan")
tab.set("name","anu")
tab.set("nasme","appukuttan")
console.log(tab.search("name"))
console.log(tab.delete("nasme"))
tab.print()
