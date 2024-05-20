// two numbers as arguments and returns their sum
// sum(3, 2) returns 5

function sum(firstNum , secondNum){
    return firstNum + secondNum;
}
result = parseInt(sum(3,2));
console.log(result);

// alternatively you can do the same 

function sum1(num1, num2){
    num1 = Number(prompt("Enter First Number"));
    num2 = Number(prompt("Enter Second Number"));
    return num1 + num2;
}
console.log(sum1());

// Return the next number from the number passed
// Write a function called nextNumber that takes in a number as an argument, increments it by 1 to find the next number, and then returns the next number.
// Examples:

// nextNumber(1) returns 2
// nextNumber(0) returns 1
// nextNumber(-2) returns -1

function nextNumber(number){
    return number + 1;
}

console.log(nextNumber(1));