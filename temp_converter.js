// Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Example usage
let celsius = 25;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(celsius + "°C = " + fahrenheit + "°F");

let f = 77;
let c = fahrenheitToCelsius(f);
console.log(f + "°F = " + c + "°C");