const eventLoop=()=>{
    console.log(`Order processing for customer 1`);
    setTimeout(() => {
        console.log(`cooking food`)
    },3000);
    console.log(`order processed customer 1`)
}

console.log(`Order taking for customer 1`)
eventLoop();
console.log(`Completed Order for Customer 1`)