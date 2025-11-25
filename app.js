// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Declaramos las tasas de cambio (Reference: 1 Euro)
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07,  // us dollar
    "GBP": 0.87,  // british pound
}

// 1. Euro a Dólar (Directo)
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}

// 2. Dólar a Yen (Dólar -> Euro -> Yen)
const fromDollarToYen = function(valueInDollar) {
    // Convertimos a Euro dividiendo
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    // Convertimos a Yen multiplicando
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    
    // Devolvemos el valor con flotantes (decimales)
    return valueInYen;
}

// 3. Yen a Libra (Yen -> Euro -> Libra)
const fromYenToPound = function(valueInYen) {
    // Convertimos a Euro
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    // Convertimos a Libra
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    
    return valueInPound;
}

// EXPORTACIÓN: Esto es vital para que Jest pueda "leer" este archivo
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };