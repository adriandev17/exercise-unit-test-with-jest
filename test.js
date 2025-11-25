// IMPORTACIÓN: Traemos las funciones desde app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');


// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

// PRUEBA 1: Euro a Dólar
test("3.5 Euros deberían ser 3.745 Dólares", function() {
    // Importante: 3.5 * 1.07 = 3.745
    const expected = 3.5 * 1.07; 
    
    // Usamos toBe porque esperamos un valor exacto simple, 
    // pero toBeCloseTo es más seguro para decimales.
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
});

// PRUEBA 2: Dólar a Yen
test("1 Dólar debería ser aprox 146.26 Yenes", function() {
    // Lógica manual: (1 / 1.07) * 156.5
    const expected = (1 / 1.07) * 156.5; 

    // Usamos toBeCloseTo para evitar errores de redondeo de JS
    expect(fromDollarToYen(1)).toBeCloseTo(expected);
});

// PRUEBA 3: Yen a Libra
test("156.5 Yenes deberían ser exactamente 0.87 Libras", function() {
    // Esta es la prueba "perfecta" porque cruza todo el puente:
    // 156.5 Yenes son 1 Euro, y 1 Euro son 0.87 Libras.
    const inputYenes = 156.5;
    const expectedPounds = 0.87;

    expect(fromYenToPound(inputYenes)).toBeCloseTo(expectedPounds);
});