function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let pos=arr[i]
        let j=i-1
        while(j>=0&&arr[j]>pos){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=pos
    }
    return arr
}
console.log(insertionSort([13,8,5,23,7,11,9,56]))
