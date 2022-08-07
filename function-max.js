// function maxInArr(number) {
//     let largest = number[0];
//     for (let i = 0; i < number.length; i++) {
//         const index = i;
//         const element = number[index];
//         if (element > largest) {
//             largest = element;
//         }

//     }
//     return largest;
// }

// const hight = [20, 30, 50, 40, 68, 51, 125];

// const tallest = maxInArr(hight);
// console.log(tallest);
function maxInArr(number) {
    let lowest = number[0];
    for (let i = 0; i < number.length; i++) {
        const index = i;
        const element = number[index];
        if (element < lowest) {
            lowest = element;
        }

    }
    return lowest;
}

const hight = [20, 30, 50, 40, 68, 51, 125];

const tallest = maxInArr(hight);
console.log(tallest);