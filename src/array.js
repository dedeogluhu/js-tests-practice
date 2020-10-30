const functions = {
    arrToString(array) {
        return array.toString();
    },
    arrPush(array, elementToAdd) {
        array.push(elementToAdd);
        return array;
    },
    arrPop(array) {
        array.pop();
        return array;
    },
    arrShift(array) {
        array.shift();
        return array;
    },
    arrChange(array, index, newElement) {
        array[index] = newElement;
        return array;
    },
    arrLength(array) {
        return array.length;
    }
}

module.exports = functions;