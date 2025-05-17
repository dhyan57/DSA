// class stack{
//     constructor(){
//         this.item=[]
//     }
//     push(val){
//         this.item.push(val)
//     }
//     pop(){
//         return this.item.pop()
//     }
//     peek(){
//         return this.item[this.item.length-1]
//     }
//     isEmpty(){
//         return this.item.length===0
//     }
//     isSize(){
//         return this.item.length
//     }
//     print(){
//         console.log(this.item)
//     }
// }
// function smal(arr){
//     let s=new stack()
    
//     for(let i=0;i<arr.length;i++){
//         s.push(arr[i])
//     }
//     while(!s.isEmpty()){
//         let val=s.pop()
//         if(val>sml){
//             sml=val
//         }
//     }
//     return sml
// }
// console.log(smal([,4,53,22,223,44,3]))


// class stack{
//     constructor(){
//         this.q=[]
//     }
//     push(val){
//         this.q.push(val)
//         for(let i=0;i<this.q.length-1;i++){
//             this.q.push(this.q.shift())
//         }
//     }
    
//     display(){
//         console.log(this.q)
//     }
// }
// const reve=new stack()
// reve.push(1)
// reve.push(2)
// reve.push(3)
// reve.display()


function grm(s,t){
    let arr1={}
    let arr2={}
    
    if(s.length!==t.length)return false
    for(let j of s){
       arr1[j]=(arr1[j]|0)+1
    }
    for(let i of t){
       arr2[i]=(arr2[i]|0)+1
    }
    
    console.log(arr1)
     console.log(arr2)
    for(let i of s){
        if(arr1[i]!==arr2[i]){
            return false
        }
    }
    return true
}
console.log(grm("gum","mug"))

// let objh={}
// for(let i of arr){
//     obj[i]=(obj[i]||0)+1
// }






















 

























