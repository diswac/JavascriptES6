function generateFibonacci(n) {
  let fibonacciArray = [0, 1];

  for (let i = 2; i < n; i++) {
      let nextNumber = fibonacciArray[i - 1] + fibonacciArray[i - 2];
      fibonacciArray.push(nextNumber);
  }

  return fibonacciArray;
}

// Specify the number of Fibonacci numbers to generate
const numberOfFibonacciNumbers = 10;

// Call the function to generate the Fibonacci sequence
const fibonacciSequence = generateFibonacci(numberOfFibonacciNumbers);

// Print the generated Fibonacci sequence
console.log(fibonacciSequence);