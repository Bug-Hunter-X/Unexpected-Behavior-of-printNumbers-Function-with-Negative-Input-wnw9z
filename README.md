# TypeScript Bug: Unexpected Behavior of printNumbers Function with Negative Input

This repository demonstrates a bug in a TypeScript function designed to print numbers from 1 to n. The function unexpectedly behaves incorrectly with 0 and negative input values.

## Bug Description

The `printNumbers` function, when provided with a non-positive input (0 or negative), does not print an error or any output.  It simply does nothing.  This is unexpected behavior. A more robust function should explicitly handle invalid input, either by throwing an error or printing an appropriate message.

## Solution

The solution addresses this issue by adding input validation and error handling to the `printNumbers` function.  The improved version explicitly checks for negative or zero input and either throws an error or provides a more informative message.