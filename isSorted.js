function isSorted(arr){
    for(let i=0 ; i<arr.length; i++){
        if(arr[i]<arr[i-1]){
            return false
        }
    }
    return true
}
const result=[1,4,5,6,9,10]
console.log(isSorted(result))