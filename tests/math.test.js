const mathFile = require('../src/math');

test('Adds 2 + 2 to equal 4', () => {
    expect(mathFile.add(2, 2)).toBe(4);
});

test('Substracts 4 - 2 to equal to 2', () => {
    expect(mathFile.substract(4, 2)).toBe(2);
})

test('Multiplies 2 * 2 to equal to 4', () => {
    expect(mathFile.multiply(2, 2)).toBe(4);
})

test('Divides 4 / 2 to equal to 2', () => {
    expect(mathFile.divide(4, 2)).toBe(2);
})