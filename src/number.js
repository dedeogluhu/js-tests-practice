const functions = {
    numToString(number) {
        return number.toString();
    },
    numToFixed(number, decimalCount) {
        return number.toFixed(decimalCount);
    },
    numStrToInt(string) {
        return parseInt(string);
    },
    numStrToFloat(string) {
        return parseFloat(string);
    }
}

module.exports = functions;