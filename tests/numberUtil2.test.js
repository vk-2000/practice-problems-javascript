const isLeapYearArrow = require("../numberUtil2");
const isLeapYear = require("../numberUtil2");



const cases = [
    [2000, true],
    [2001, false],
    [4000, true],
    [500, false]
];

describe("Is the given year leap year (regular function)", () => {
    test.each(cases)("%d should give %s", (input, expected) => {
        expect(isLeapYear(input)).toBe(expected);
    });
});

describe("Is the given year leap year (arrow function)", () => {
    test.each(cases)("%d should give %s", (input, expected) => {
        expect(isLeapYearArrow(input)).toBe(expected);
    });
});