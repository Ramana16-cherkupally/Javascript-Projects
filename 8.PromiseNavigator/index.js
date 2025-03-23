function OrderingPizza(Message){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
     const success=true;
     if(success){
      resolve(Message);
     }else{
      reject("pizza order is cancelled ")
     }
    },3000)
  })
}

OrderingPizza("pizza orderd placed")
.then((Message)=>{
  document.getElementById("demo").innerHTML=Message;
 return OrderingPizza("pizza is being prepared")
})
.then((Message)=>{
 document.getElementById("demo").innerHTML=Message;
return OrderingPizza("pizza is out for delivery")
})
.then((Message)=>{
  document.getElementById("demo").innerHTML=Message;
 return OrderingPizza("pizza is deliverd & time to eat")
})
.then((finalMessage)=>{
  document.getElementById("demo").innerHTML=finalMessage;
})
.catch((error)=>{
  document.getElementById("demo").innerHTML=error;
})
.finally(()=>{
 document.getElementById("demo").innerHTML="thank you for ordering to again";
 })
