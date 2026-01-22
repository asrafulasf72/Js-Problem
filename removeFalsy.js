function removeFalsy(arr){
    return arr.filter(Boolean)
}

const result=[1,"",2,4,5,false,8,10,NaN,4 ,4 , undefined]
console.log(removeFalsy(result))