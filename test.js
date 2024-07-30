// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected1 = 3.5 * 1.07;
    const expected2 = 3.5 * 1.07 * 156.5;
    const expected3 = 3.5 * 1.07 * 156.5 * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBeCloseTo(expected1); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
    expect(fromDollarToYen(3.5)).toBeCloseTo(expected2);
    expect(fromYenToPound(3.5)).toBeCloseTo(expected3);
})