let stock= false;

if(!stock){
    console.log("this from inner Condition: ",!stock ,"Out of stock")
}

console.log("out from condition",!stock)

function addSum(number1, number2){
        const sum=number1+number2
        return sum
}

console.log(addSum(10,5))