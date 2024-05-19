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

