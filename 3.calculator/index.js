const OperationPerform=(Operator)=>{
  let num1=parseFloat(document.getElementById("num1").value);
  let num2=parseFloat(document.getElementById("num2").value);
  let result=0;

  if(isNaN(num1)||isNaN(num2)){
     const resultElement=document.getElementById("result");
          resultElement.innerHTML="enter a valid a number";
          resultElement.style.color="red"
      return;
  }
  switch(Operator){
      case "+":
          result=num1+num2;
          break;

      case "-":
          result=num1-num2;
          break;
      
      case "*":
          result=num1*num2;
          break;

      case "/":
          if(num2===0){
        const resultElement=document.getElementById("result");
              resultElement.innerHTML="cant divide with zero!";
              
           return;
          }else{
          result=num1/num2;
          
          }
          break;

          default:
          document.getElementById("result").innerHTML = "Invalid operation";
          return;
       }
       const resultElement = document.getElementById("result");
       resultElement.innerHTML = `Result: <span id="resultValue">${result}</span>`;
       
       // Target the span specifically for styling
       const resultSpan = document.getElementById("resultValue");
       
       if (result > 0) {
           resultSpan.style.color = "green";
       } else if (result < 0) {
           resultSpan.style.color = "red";
       } else {
           resultSpan.style.color = "gray"; // Changed to gray for zero to differentiate
       }
       
}