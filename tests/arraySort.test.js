const arraySortFile = require("../src/arraySort");

test('Should sort an array', () => {
    expect(arraySortFile.arrSort(["Banana", "Orange", "Apple", "Mango"])).toEqual(["Apple", "Banana", "Mango", "Orange"]);
})

test("Should revers an array", () => {
    expect(arraySortFile.arrReverse(["Apple", "Banana", "Mango", "Orange"])).toEqual(["Orange", "Mango", "Banana", "Apple"]);
})

