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

function isSumLessThan100(num1, num2){
    let sum = num1 + num2;
    if (sum > 100) {
        console.log("true")
    } else {
        console.log("false")
    }
}
isSumLessThan100(25, 55);
isSumLessThan100(72, 38);

// Convert minutes to second
// Given that 1 minute is equal to 60 seconds. Write a function called convertToSeconds that takes in the number of minutes as an arguments and returns the seconds equivalent in the format x seconds e.g 120 seconds, 300 seconds. e.t.c. If the seconds equivalent is 0, then it should just return 0, if the seconds equivalent is 1, then it should return 1, if the seconds equivalent is more than 1, then it should return with the string "seconds"
// Examples:

// convertToSeconds(5) returns 300 seconds
// convertToSeconds(0) returns 0
// convertToSeconds(1) returns 1 second (singular)

function convertToSeconds(minutes){
    convert = minutes * 60;
    if (convert === 0) {
        return 0;
    } else if (convert === 1){
        return `${convert} second`;
    } else if (convert > 1) {
        return convert + " seconds";
    }
}
console.log(convertToSeconds(5));
console.log(convertToSeconds(0));
console.log(convertToSeconds(1/60));

// Greater among the three
// Write a function called greater that takes in three numbers as arguments and returns the greatest number among the three. If they are all equal, it should return any of them.
// Examples:

// greater(2, 35, 9) returns 35
// greater(23, 23, 23) returns 23

function greater(num1, num2, num3){
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if(num2 > num1 && num2 > num3){
        return num2;
    } else if(num3 > num1 && num3 && num2){
        return num3;
    } else if (num1 == num2 && num1 == num3 && num2 == num3){
        return num1;
    }
}
console.log(greater(2, 35, 9));
console.log(greater(23, 23, 23));

// Less among the three
// Write a function called least that takes in three numbers as arguments and returns the least among the three. If they are all equal, it should return any of them.
// Examples:

// least(2, 35, 9) returns 2
// least(23, 23, 23) returns 23

function least(num1, num2, num3){
    if (num1 < num2 && num1 < num3) {
        return num1;
    } else if (num2 < num1 && num2 < num3){
        return num2;
    } else if (num3 < num1 && num3 < num2){
        return num3;
    } else {
        return num1;
    }
}
console.log(least(2, 35, 9));
console.log(least(23, 23, 23));

// Football points
// Write a function called footballPoints that returns the number of points a football team has obtained so far, the first argument for this function is the number of games a team has won, the second argument is the number of games the team has drawn and the third arguement is the number of times the team has lost. 3 points are awarded for every game won, 1 point for every game draw and 0 points for every game lost.
// Examples:

// footballPoints(5, 0, 2) returns 15
// footballPoints(0, 0, 2) returns 0
// footballPoints(5, 2, 0) returns 17

function footballPoints(won, drawn, lost){
    result = (won * 3) + (drawn * 1) + (lost * 0)
    console.log(result); 
}

footballPoints(5, 0, 2);
footballPoints(0, 0, 2);
footballPoints(5, 2, 0);

// Even numbers
// Write a function called isEven that takes in a number as an argument, the function returns true if a number is even and returns false 
// if a number is odd. Use this function to log to the console all the even numbers between 0 and 101.
function isEven(number) {
    return number % 2 === 0;
}

function logEvenNumbers() {
    for (let i = 0; i <= 101; i++) {
        if (isEven(i)) {
            console.log(i);
        }
    }
}

// Call the function to log even numbers
logEvenNumbers();
