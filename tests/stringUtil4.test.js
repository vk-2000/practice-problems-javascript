const countVowelsArrow = require("../stringUtil4");
const countVowels = require("../stringUtil4");

const cases = [
    ["codeacademy", 5],
    ["javaScript", 3],
]

describe("Count vowels in string (regular function)", () => {
    test.each(cases)("%s should give %d", (input, expected) => {
        expect(countVowels(input)).toBe(expected);
    });
});

describe("Count vowels in string (arrow function)", () => {
    test.each(cases)("%s should give %d", (input, expected) => {
        expect(countVowelsArrow(input)).toBe(expected);
    });
});
