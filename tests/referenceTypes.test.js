const referenceTypes = require('../src/referenceTypes');

//Object
test('Returns object', () => {
    expect(referenceTypes.returnObject(4)).toEqual({ number: 4 });
})

//Array
test('Returns array', () => {
    expect(referenceTypes.returnArray(2, 3)).toEqual([2, 3]);
})