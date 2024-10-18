import { add } from './StringCalculator'; // You'll need to export the add function

describe('StringCalculator', () => {
    test('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });

    test('should return the single number', () => {
        expect(add('1')).toBe(1);
    });

    test('should return the sum of two numbers', () => {
        expect(add('1,5')).toBe(6);
    });

    test('should return the sum of multiple numbers', () => {
        expect(add('1,2,3')).toBe(6);
    });

    test('should handle new line delimiters', () => {
        expect(add('1\n2,3')).toBe(6);
    });

    test('should handle custom delimiters', () => {
        expect(add('//;\n1;2')).toBe(3);
    });

    test('should throw an error for negative numbers', () => {
        expect(() => add('1,-2,3')).toThrow('negative numbers not allowed -2');
    });

    test('should throw an error for multiple negative numbers', () => {
        expect(() => add('1,-2,-3')).toThrow('negative numbers not allowed -2,-3');
    });
});