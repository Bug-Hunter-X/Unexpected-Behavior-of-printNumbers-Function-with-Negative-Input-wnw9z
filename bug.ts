function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Works as expected
printNumbers(0); // Does not print anything, should print nothing or handle the case gracefully.
printNumbers(-1); // Throws no error, unexpected behavior, should throw an error or handle the case gracefully.