function performOperation(operator) {
  // Get the values of the input fields
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let result = 0;

  // Check if inputs are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('result').innerText = "Please enter valid numbers!";
      return;
  }

  // Perform operation based on the operator clicked
  switch (operator) {
      case '+':
          result = num1 + num2;
          break;
      case '-':
          result = num1 - num2;
          break;
      case '*':
          result = num1 * num2;
          break;
      case '/':
          if (num2 === 0) {
              document.getElementById('result').innerText = "Cannot divide by zero!";
              return;
          } else {
              result = num1 / num2;
          }
          break;
      default:
          break;
  }

  // Display the result
  document.getElementById('result').innerText = `Result: ${result}`;
}