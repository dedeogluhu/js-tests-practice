const mathFile = require('../src/math');

//Add
test('Adds 2 + 2 to equal 4', () => {
    expect(mathFile.add(2, 2)).toBe(4);
});

test('Adds 1 + 3 NOT equal to 5', () => {
    expect(mathFile.add(1, 3)).not.toBe(5);
})

//Substract
test('Substracts 4 - 2 to equal to 2', () => {
    expect(mathFile.substract(4, 2)).toBe(2);
})

test('Substracts 5 - 3 NOT to equal to 1', () => {
    expect(mathFile.substract(5, 3)).not.toBe(1);
})

//Multiply
test('Multiplies 2 * 2 to equal to 4', () => {
    expect(mathFile.multiply(2, 2)).toBe(4);
})

test('Multiplies 2 * 1 to NOT equal to 3', () => {
    expect(mathFile.multiply(2, 1)).not.toBe(3);
})

//Divide
test('Divides 4 / 2 to equal to 2', () => {
    expect(mathFile.divide(4, 2)).toBe(2);
})

test('Divides 4 / 1 to NOT equal to 2', () => {
    expect(mathFile.divide(4, 1)).not.toBe(2);
})

//Object
test('Returns object', () => {
    expect(mathFile.returnObject(4)).toEqual({ number: 4 });
})

//Array
test('Returns array', () => {
    expect(mathFile.returnArray(2, 3)).toEqual([2, 3]);
})