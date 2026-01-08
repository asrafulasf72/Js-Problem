function findMaxNumber(arr){
    let maxNumber=[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]>maxNumber){
            maxNumber=arr[i]
        }
    }
    return maxNumber;
}

console.log(findMaxNumber([8,1,5,9]))