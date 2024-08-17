
import { add } from './StringCalculator';

describe('String Calculator', () => {
  test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('returns the number itself if only one number is provided', () => {
    expect(add("1")).toBe(1);
  });

  test('returns the sum of two comma-separated numbers', () => {
    expect(add("1,2")).toBe(3);
  });

  test('returns the sum of multiple comma-separated numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test('handles new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('supports custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test('throws an exception for negative numbers', () => {
    expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2,-3");
  });
});
