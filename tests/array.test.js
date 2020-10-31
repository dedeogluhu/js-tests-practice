const { TestScheduler } = require('jest');
const arrayFile = require('../src/array');

test('Should return string of an array', () => {
    expect(arrayFile.arrToString(["Banana", "Orange", "Apple", "Mango"])).toMatch('Banana,Orange,Apple,Mango');
})

test('Should add an element to the given array', () => {
    expect(arrayFile.arrPush(["Banana", "Orange", "Apple", "Mango"], "Kiwi")).toEqual(["Banana", "Orange", "Apple", "Mango", "Kiwi"]);
})

test('Should delete the last element from the given array', () => {
    expect(arrayFile.arrPop(["Banana", "Orange", "Apple", "Mango"])).toEqual(["Banana", "Orange", "Apple"]);
})

test('Should delete the first element from the given array', () => {
    expect(arrayFile.arrShift(["Banana", "Orange", "Apple", "Mango"])).toEqual(["Orange", "Apple", "Mango"]);
})

test('Should change an element of an array', () => {
    expect(arrayFile.arrChange(["Banana", "Orange", "Apple", "Mango"], 0, "Kiwi")).toEqual(["Kiwi", "Orange", "Apple", "Mango"]);
})

test('Should give the length of an array', () => {
    expect(arrayFile.arrLength(["Banana", "Orange", "Apple", "Mango"])).toBe(4);
})

test('Should give the index of an element from an array', () => {
    expect(arrayFile.arrIndexOf(["Banana", "Orange", "Apple", "Mango"], "Apple")).toBe(2);
})