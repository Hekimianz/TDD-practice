// Function that capitalizes the first letter of a string.
function capitalize(string) {
    return string.replace(/^\w/, (c) => c.toUpperCase());
}

// Function that reverses a string.
function reverseString(string) {
    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}

//Calculator object with a add, subtract, multiply and divide function inside.
let calculator = []
calculator.add = function add(a, b) {
    return a + b;
}

calculator.subtract = function (a, b) {
    return a - b;
}

calculator.divide = function (a, b) {
    return a / b;
}

calculator.multiply = function (a, b) {
    return a * b;
}

// Function that takes a string and returns it with each character shifted +1 (i.e "a" is "b" and "z" is "a").
function ceasarCipher(string) {
    let shiftedCodes = [];
    for (let i = 0; i < string.length; i++) {
        let charcode = 0;
        if (string[i] == "z") {
            charcode = 97;
        }
        else if (string[i] == " " || string[i] == "!" || string[i] == "." ||
            string[i] == "," || string[i] == "?" || string[i] == "¿" ||
            string[i] == "¡" || string[i] == ":" || string[i] == ";" ||
            string[i] == "-" || string[i] == "_" || string[i] == "{" ||
            string[i] == "}" || string[i] == "[" || string[i] == "[" || string[i] == "]") {
            charcode = string.charCodeAt(i);
        }
        else {
            charcode = string.charCodeAt(i) + 1;
        }

        shiftedCodes.push(charcode);
    }
    let stringArr = [];
    for (let i = 0; i < shiftedCodes.length; i++) {
        let current = String.fromCharCode(shiftedCodes[i]);
        stringArr.push(current);
    }
    let newString = stringArr.join("");
    return newString;
};

// Function that takes an array of numbers and returns an object with the average, min, max and length.
function analyzeArray(array) {
    let average = array.reduce((a, b) => a + b, 0) / array.length;
    let min = Math.min(...array);
    let max = Math.max(...array);
    let length = array.length;
    let object = {
        'average': average,
        'min': min,
        'max': max,
        'length': length,
    }
    return object;
}

module.exports.capitalize = capitalize;
module.exports.reverseString = reverseString;
module.exports.calculator = calculator;
module.exports.ceasarCipher = ceasarCipher;
module.exports.analyzeArray = analyzeArray;