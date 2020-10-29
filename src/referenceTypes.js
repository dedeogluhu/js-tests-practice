const functions = {
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