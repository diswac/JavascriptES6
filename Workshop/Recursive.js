function fibonacciRecursive(n) {
  if (n <= 1) {
      return n;
  } else {
      return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
}

// Specify the number of Fibonacci numbers to generate
const numberOfFibonacciNumbers = 10;

// Generate and print the Fibonacci sequence using recursion
for (let i = 0; i < numberOfFibonacciNumbers; i++) {
  console.log(fibonacciRecursive(i));
}