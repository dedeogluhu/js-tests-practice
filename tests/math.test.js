const mathFile = require('../src/math');

test('Adds 2 + 2 to equal 4', () => {
    expect(mathFile.add(2, 2)).toBe(4);
});