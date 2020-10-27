const functions = {
    add: (number1, number2) => number1 + number2,

    substract: (number1, number2) => number1 - number2,

    multiply: (number1, number2) => number1 * number2,

    divide: (number1, number2) => number1 / number2,

    returnObject: (number) => {
        object = { number }
        return object
    },

    returnArray: (num1, num2) => {
        array = [num1, num2];
        return array;
    }
}

module.exports = functions;