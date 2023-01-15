const areDigitSameArrow = require("../numberUtil1");
const areDigitSame = require("../numberUtil1");

const cases = [
    [222, true],
    [123, false],
    [1, true]
];

describe("Are digits same (regular function)", () => {
    test.each(cases)("%d should give %s", (input, expected) => {
        expect(areDigitSame(input)).toBe(expected);
    });
});

describe("Are digits same (arrow function)", () => {
    test.each(cases)("%d should give %s", (input, expected) => {
        expect(areDigitSameArrow(input)).toBe(expected);
    });
});