function printNumbers(n: number): void {
  if (n <= 0) {
    throw new Error('Input must be a positive integer.');
    //Alternative: console.error('Input must be a positive integer.'); 
  } else {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
  }
}

printNumbers(5); // Works as expected
printNumbers(0); // Throws an error
printNumbers(-1); // Throws an error