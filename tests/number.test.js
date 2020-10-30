const { TestScheduler } = require('jest');
const numberFile = require('../src/number');

test('Should return string of a number', () => {
    expect(numberFile.numToString(123)).toMatch("123");
})

test('Should returns a string with the number written with a specified number of decimals', () => {
    expect(numberFile.numToFixed(9.656, 2)).toMatch('9.66');
})

test('Should returns a string with the number written with a specified number of decimals', () => {
    expect(numberFile.numToFixed(9.656, 6)).toMatch('9.656000');
})

test('Should return the integer value of a string', () => {
    expect(numberFile.numStrToInt("10")).toEqual(10);
})

test('Should return the float value of a string', () => {
    expect(numberFile.numStrToFloat("10.33")).toEqual(10.33);
})