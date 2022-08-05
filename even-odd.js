function evenOrOdd(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }


}

const givenNumber = evenOrOdd(125);

console.log(givenNumber);

const givenNumbers = evenOrOdd(126);

console.log(givenNumbers);

