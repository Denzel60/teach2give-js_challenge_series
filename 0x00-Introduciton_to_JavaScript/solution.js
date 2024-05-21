// two numbers as arguments and returns their sum
// sum(3, 2) returns 5
// sum(-4, -8) returns -12
// sum(-3, 5) returns 2

function sum(firstNum , secondNum){
    return firstNum + secondNum;
}

console.log(sum(3, 2));
console.log(sum(-4, -8));
console.log(sum(-3, 5));

// alternatively you can do the same 

// function sum1(num1, num2){
//     num1 = Number(prompt("Enter First Number"));
//     num2 = Number(prompt("Enter Second Number"));
//     return num1 + num2;
// }
// console.log(sum1());

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
console.log(nextNumber(0));
console.log(nextNumber(-2))

// Find perimeter of a rectangle
// Write a function called rectanglePerimeter that takes in the length and width as arguments and returns the perimeter of the rectangle.
// Examples:
// rectanglePerimeter(2, 5) returns 14
// rectanglePerimeter(3, 5) returns 16
// rectanglePerimeter(10, 20) returns 60

function rectanglePerimeter(length, width){
    return 2 * (length + width);
}

console.log(rectanglePerimeter(2, 5));
console.log(rectanglePerimeter(3, 5));
console.log(rectanglePerimeter(10, 20));

// Return something to me
// Write a function called returnSomethingToMe that returns the string "something" followed by a space " " followed by the string that was passed into the function. Examples:
// returnSomethingToMe("is better than nothing") returns "something is better than nothing"
// returnSomethingToMe("jack daniels") returns "something jack daniels"
// returnSomethingToMe("pinocchio") returns "something pinocchio"

function returnSomethingToMe(str) {
    return "something " + str;
}
  
console.log(returnSomethingToMe("is better than nothing"));
console.log(returnSomethingToMe("jack daniels")); 
console.log(returnSomethingToMe("pinocchio")); 

// Bob's BMI vs Jane's BMI
// Bob and Jane want to know who has a bigger BMI than the other. Write a function called greaterBMI that will take in as the first arguement the BMI of Bob and as the second Argument the BMI of Jane. If Bob has a bigger BMI than jane, your function should return the string "Bob", if Jane has a bigger BMI than Bob, it should return the string "Jane", if they have the same BMI, it should return the string "Equal".
// Examples:

// greaterBMI(30, 25) returns the string "Bob"
// greaterBMI(35, 40) returns the string "Jane"
// greaterBMI(35, 35) returns the string "Equal"

function greaterBMI(Bob, Jane){
    if (Bob > Jane) {
        return "Bob";
    } else if (Jane > Bob){
        return "Jane";        
    } else {
        return "Equals";
    }
}

console.log(greaterBMI(30, 25));
console.log(greaterBMI(35, 40));
console.log(greaterBMI(35, 35));

// Basketball points
// You are counting points for a basketball game, 2 points are awarded for every 2 pointer and 3 points for every 3 pointer. Write a function called basketBallPoints, the first argument should be the number of two pointers scored by the team and the second argument the number of three pointers scored by the team. This function returns the final points for the team.
// Examples:

// basketBallPoints(1, 1) returns 5
// basketBallPoints(7, 5) returns 29
// basketBallPoints(0, 5) returns 15

function basketBallPoints(twoPointer, threePointer){
    return (twoPointer * 2) + (threePointer * 3);
}

console.log(basketBallPoints(1,1));
console.log(basketBallPoints(7,5));
console.log(basketBallPoints(0,5));

// Less than 100
// Given two numbers, write a function called isSumMoreThan100 return true if their sum is greater than 100 and false if their sum is less than 100.
// Examples:

// isSumLessThan100(25, 55) returns false
// isSumLessThan100(72, 38) returns true

