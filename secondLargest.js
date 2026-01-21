function secondLargest(arr){
      let unique=[...new Set(arr)]
      unique.sort((a,b)=>b-a);
      return unique[1]
}

 const nums=[10,20,8,19,21]
 console.log(secondLargest(nums))