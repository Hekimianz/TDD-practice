const functions = require('./app.js');

test('capitalizes first letter of a string', () => {
    expect(functions.capitalize("hello, how are you?")).toBe("Hello, how are you?");
});

test('reverses a string', () => {
    expect(functions.reverseString("this is a reversed function.")).toBe('.noitcnuf desrever a si siht');
});

test('adds two numbers', () => {
    expect(functions.calculator.add(1, 2)).toBe(3);
});

test('subtracts two numbers', () => {
    expect(functions.calculator.subtract(4, 2)).toBe(2);
});

test('divides two numbers', () => {
    expect(functions.calculator.divide(10, 2)).toBe(5);
});

test('multiplies two numbers', () => {
    expect(functions.calculator.multiply(5, 2)).toBe(10);
});

test('ceasar cipher: returns a "shifted" word', () => {
    expect(functions.ceasarCipher("defend")).toBe('efgfoe');
})

test('ceasar cipher: returns a "shifted" word', () => {
    expect(functions.ceasarCipher("defend")).toBe('efgfoe');
})

test('ceasar cipher: "z" wraps to "a"', () => {
    expect(functions.ceasarCipher("zzz")).toBe('aaa');
})

test('ceasar cipher: ignore spaces', () => {
    expect(functions.ceasarCipher("hello there")).toBe('ifmmp uifsf');
})

test('ceasar cipher: keeps case', () => {
    expect(functions.ceasarCipher("HellO")).toBe('IfmmP');
})

test('ceasar cipher: ignores punctuation', () => {
    expect(functions.ceasarCipher("Hello! How are you?")).toBe('Ifmmp! Ipx bsf zpv?');
})

test('analyze array: returns an average', () => {
    expect(functions.analyzeArray([1, 8, 3, 4, 2, 6]).average).toEqual(4);
})

test('analyze array: returns a min value', () => {
    expect(functions.analyzeArray([1, 8, 3, 4, 2, 6]).min).toEqual(1);
})

test('analyze array: returns a max value', () => {
    expect(functions.analyzeArray([1, 8, 3, 4, 2, 6]).max).toEqual(8);
})

test('analyze array: returns the length', () => {
    expect(functions.analyzeArray([1, 8, 3, 4, 2, 6]).length).toEqual(6);
})

