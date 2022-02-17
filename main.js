const add = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}
const subtract = (num1, num2) => {
    const difference = num1 - num2;
    return difference;
}
const divide = (num1, num2) => {
    const quotient = num1 / num2;
    return quotient;
}
const multiply = (num1, num2) => {
    const product = num1 * num2;
    return product;
}
const square = (num1) => {
    const squared = num1 * num1;
    return squared;
}

const calculate = (num1, num2, operation) => {
    switch (operation) {
        case 'add':
            console.log(add(num1, num2));
            break;
        case 'subtract':
            console.log(subtract(num1, num2));
            break;
        case 'multiply':
            console.log(multiply(num1, num2));
            break;
        case 'divide':
            console.log(divide(num1, num2));
            break;
        case 'square':
            console.log(square(num1)); // gonna log the result of the function.
            break;
        default: 
            console.log("You did not enter add, subtract, multiply, divide, or square");
    }
}
calculate(12, 4, 'add');
