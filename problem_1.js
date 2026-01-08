function reverseString(str){
   let reverseStr="";
   for(let char of str){
         reverseStr = char + reverseStr
   }
   return reverseStr;
}


let result=reverseString("hello")
console.log(result)

