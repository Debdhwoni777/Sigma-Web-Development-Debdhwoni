// this is a factorial code 
 
function factorial(n) {
    if (n < 0) {
      return "Factorial not defined for negative numbers";
    } else if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Example usage:
  let number = 5;
  console.log(`Factorial of ${number} is ${factorial(number)}`);