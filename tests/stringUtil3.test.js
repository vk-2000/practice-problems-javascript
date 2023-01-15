const concatStringsArrow = require("../stringUtil3");
const concatStrings = require("../stringUtil3");



const cases = [
    [["code", "academy"], "odecademy"],
    [["lazy", "interns"], "azynterns"],
];

describe("Concat strings except first character (regular function)", () => {
    test.each(cases)("%o should give %s", (input, expected) => {
        expect(concatStrings(input)).toBe(expected);
    });
});

describe("Concat strings except first character  (arrow function)", () => {
    test.each(cases)("%o should give %s", (input, expected) => {
        expect(concatStringsArrow(input)).toBe(expected);
    });
});