const longestStringArrow = require("../arrayUtil2");
const longestString = require("../arrayUtil2");

const cases = [
    [["we", "love", "code", "academy"], "academy"],
    [["hello", "world"], "hello"],
    [["", "hi", "hello"], "hello"],
    [["", "", ""], ""]
]

describe("Longest string in an array (regular funtion)", () => {
    test.each(cases)("%o should return %s", (input, expected) => {
        expect(longestString(input)).toBe(expected);
    });
});

describe("Longest string in an array (arrow funtion)", () => {
    test.each(cases)("%o should return %s", (input, expected) => {
        expect(longestStringArrow(input)).toBe(expected);
    });
});

