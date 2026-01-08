function removeDuplicates(arr){
    let uniqueArr=[];

    for(let num of arr){
        if(!uniqueArr.includes(num)){
            uniqueArr.push(num)
        }
    }
    return uniqueArr;
}

console.log(removeDuplicates([1,2,2,3,4,4]))