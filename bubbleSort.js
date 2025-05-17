function bubbleSort(arr){
    let temp=0
    for(let i=0;i<arr.length-1;i++){
        for(j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}

console.log(bubbleSort([32,35,46,75,86,79,45,23,3]))