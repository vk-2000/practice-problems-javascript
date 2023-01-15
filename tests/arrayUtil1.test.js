const largestEvenArrow = require('../arrayUtil1');
const largestEven = require('../arrayUtil1');

describe("largestEven regular funtion", () => {
    test('[1,2,3,4,5,6] -> 6', () => {
        expect(largestEven([1,2,3,4,5,6])).toBe(6);
    });
    test('[1,3,5,7] -> -1', () => {
        expect(largestEven([1,3,5,7])).toBe(-1);
    });
    test('[-1,-12,-14,15,0] -> 0', () => {
        expect(largestEven([-1,-12,-14,15,0])).toBe(0);
    });
    test('[-1,-12,-14,15] -> -12', () => {
        expect(largestEven([-1,-12,-14,15])).toBe(-12);
    });
})

describe("largestEven arrow funtion", () => {
    test('[1,2,3,4,5,6] -> 6', () => {
        expect(largestEvenArrow([1,2,3,4,5,6])).toBe(6);
    });
    test('[1,3,5,7] -> -1', () => {
        expect(largestEvenArrow([1,3,5,7])).toBe(-1);
    });
    test('[-1,-12,-14,15,0] -> 0', () => {
        expect(largestEvenArrow([-1,-12,-14,15,0])).toBe(0);
    });
    test('[-1,-12,-14,15] -> -12', () => {
        expect(largestEvenArrow([-1,-12,-14,15])).toBe(-12);
    });
})
