const changeCapitalizationArrow = require("../stringUtil1");
const changeCapitalization = require("../stringUtil1");

const cases = [
    ["abCdE", "ABcDe"],
    ["MeRRy hAD a LITTle lAMp", "mErrY Had A littLE LamP"]
]

describe("Change capitalization (regular function)", () => {
    test.each(cases)("%s should give %s", (input, expected) => {
        expect(changeCapitalization(input)).toBe(expected);
    });
});

describe("Change capitalization (arrow function)", () => {
    test.each(cases)("%s should give %s", (input, expected) => {
        expect(changeCapitalizationArrow(input)).toBe(expected);
    });
});