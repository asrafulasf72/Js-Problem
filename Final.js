/* Problem 1*/
function reverseString(str){
   let reverseStr="";
   for(let char of str){
         reverseStr = char + reverseStr
   }
   return reverseStr;
}

/**Problem 2 */
function countVowels(str){
      let vowels="aeiou";
      let count=0;

      for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++
        }
      }
      return count;
}

/**Problem 3 */
function isPalindrome(str){
    let convert = str.toLowerCase();
    let reversed = convert.split("").reverse().join("");

    return convert === reversed
}

/**Problem 4 */
function findMaxNumber(arr){
    let maxNumber=[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]>maxNumber){
            maxNumber=arr[i]
        }
    }
    return maxNumber;
}

/**problem 5 */
function removeDuplicates(arr){
    let uniqueArr=[];

    for(let num of arr){
        if(!uniqueArr.includes(num)){
            uniqueArr.push(num)
        }
    }
    return uniqueArr;
}

/**problem 6 */
function sumArray(arr){
    let sum=0;
    for(let num of arr){
        sum=num+sum;
    }
    return sum;
}

/**problem 7 */
function findEvenNumbers(arr){
    let evenNumbers=[];

    for(let num of arr){
        if(num % 2 === 0){
            evenNumbers.push(num)
        }
    }
    return evenNumbers;
}

/**problem 8 */
function capitalizeWords(str){
    let words=str.split(" ");
    let result=[];

    for(let word of words){
        let capitalizeWord=word.charAt(0).toUpperCase() + word.slice(1);
        result.push(capitalizeWord);
    }

    return result.join(" ")
}

/**problem 9 */
function factorial(num){
    let result=1;
    for(let i=1; i<=num;i++){
        result= result*i;
    }
    return result;
}

/**problem 10 */
function  pingPongArray(){
    let result=[];
    for(let i=1; i<=20;i++){
        if (i % 3===0 && i%5 ===0){
            result.push("PingPong");
        }
        else if(i%3===0){
            result.push("ping");
        }
        else if(i%5===0){
            result.push("pong")
        }else{
            result.push(i)
        }
    }
    return result
}
