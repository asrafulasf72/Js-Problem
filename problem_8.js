function capitalizeWords(str){
    let words=str.split(" ");
    let result=[];

    for(let word of words){
        let capitalizeWord=word.charAt(0).toUpperCase() + word.slice(1);
        result.push(capitalizeWord);
    }

    return result.join(" ")
}

console.log(capitalizeWords("hello world bangladesh how are you"))

  
  