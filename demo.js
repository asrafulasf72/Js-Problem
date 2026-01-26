const processOrder=(customer)=>{
      console.log(`processing Order for Customer 1`);

      const currentTime = new Date().getTime();
      while((currentTime+3000)>= new Date().getTime());
      console.log(`Order Processed for customer 1`);
}

console.log(`Take Oreder from customer 1`);
processOrder();
console.log(`Completed Order for Customer 1`);