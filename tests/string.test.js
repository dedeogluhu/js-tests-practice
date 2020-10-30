const { TestScheduler } = require('jest');
const stringFile = require('../src/string');

test("Should return length of the given string", () => {
    expect(stringFile.strLength('Hello')).toBe(5);
})

test("Should return index of the given string", () => {
    expect(stringFile.strIndexOf("locate", "Please locate where 'locate' occurs!")).toBe(7);
})

test("Should return sliced string", () => {
    expect(stringFile.strSlice("Apple, Banana, Kiwi", 7, 13)).toMatch("Banana");
})

test("Should replace part of a string", () => {
    expect(stringFile.strReplace("Please visit Microsoft!", "Microsoft", "W3Schools")).toMatch("Please visit W3Schools!");
})

test("Should be case sensitive", () => {
    expect(stringFile.strReplace("Please visit MICROSOFT!", "Microsoft", "W3Schools")).not.toMatch("Please visit W3Schools!");
})

test("Should return uppercase of a string", () => {
    expect(stringFile.strUpper('hello')).toMatch('HELLO');
})

test("Should return lowercase of a string", () => {
    expect(stringFile.strLower('HELLO')).toMatch('hello');
})

test('Should add strings together', () => {
    expect(stringFile.strAdd('Hello', 'World')).toMatch('Hello World');
})

test('Should trim the given string', () => {
    expect(stringFile.strTrim('     Hello     ')).toMatch('Hello');
})

test('Should return the character at a specified index from the given string', () => {
    expect(stringFile.strCharAt('Hello', 1)).toMatch('e');
})

