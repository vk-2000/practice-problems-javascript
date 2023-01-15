const replaceCharactersArrow = require("../stringUtil5");
const replaceCharacters = require("../stringUtil5");

const cases = [
    ["codeacademy", "dpefbdbefnz"],
    ["lazyinterns", "mbazjoufsot"],
    ["Ab 123 bc", "Bc 123 cd"]
]

describe("Replace characters with its successive character in alphabet (regular function)", () => {
    test.each(cases)("%s should give %s", (input, expected) => {
        expect(replaceCharacters(input)).toBe(expected);
    });
});

describe("Replace characters with its successive character in alphabet (arrow function)", () => {
    test.each(cases)("%s should give %s", (input, expected) => {
        expect(replaceCharactersArrow(input)).toBe(expected);
    });
});