const endsWithArrow = require("../stringUtil2");
const endsWithScript = require("../stringUtil2");

const cases = [
    ["javascript", false],
    ["javaScript", true],
    ["javcript", false],
    ["ript", false]
]

describe("Ends with Script (regular function)", () => {
    test.each(cases)("%s should give %s", (input, expected) => {
        expect(endsWithScript(input)).toBe(expected);
    });
});

describe("Ends with Script (arrow function)", () => {
    test.each(cases)("%s should give %s", (input, expected) => {
        expect(endsWithArrow(input)).toBe(expected);
    });
});

