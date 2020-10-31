const functions = {
    arrMap(array) {
        // Creates a new array by performing a function on each array element
        // Method does not change the original array
        const newArray = array.map(x => x + 1);
        return newArray;
    },
    arrFilter(array) {
        // Method creates a new array with array elements that passes a test
        const newArray = array.filter(x => x > 15);
        return newArray;
    },
    arrReduce(array) {
        const newArray = array.reduce((x, y) => x + y)
        // x => accumulator (previous value) --- y => current value
        return newArray;
    },
    arrForEach(array) {
        let newArray = [];
        array.forEach(x => newArray.push(x + 1));
        return newArray;
    }
}

module.exports = functions;