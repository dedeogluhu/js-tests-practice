const arrayIterationFile = require('../src/arrayIteration');

test('Should return an array of numbers added +1', () => {
    expect(arrayIterationFile.arrMap([45, 4, 9, 16, 25])).toEqual([46, 5, 10, 17, 26]);
})

test('Should return an array of numbers bigger than 15', () => {
    expect(arrayIterationFile.arrFilter([45, 4, 9, 16, 25])).toEqual([45, 16, 25]);
})

test('Should return the sum of an array', () => {
    expect(arrayIterationFile.arrReduce([45, 4, 9, 16, 25])).toBe(99);
})

test('Should return an array of numbers bigger than 15', () => {
    expect(arrayIterationFile.arrForEach([45, 4, 9, 16, 25])).toEqual([46, 5, 10, 17, 26]);
})