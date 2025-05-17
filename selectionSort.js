function selection(arr){
    for(let i=0;i<arr.length-1;i++){
        let index=i
        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[index]){
                index=j
            }
        }
        [arr[i],arr[index]]=[arr[index],arr[i]]
    }
    return arr
}

console.log(selection([324,13,4,5,35,46]))