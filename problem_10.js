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

console.log(pingPongArray());