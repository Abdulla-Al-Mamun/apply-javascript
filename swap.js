let firstNum = 10;
let secondNum = 12;

console.log(firstNum, secondNum);

const temp = firstNum;

firstNum = secondNum;
secondNum = temp;

console.log(firstNum, secondNum);
