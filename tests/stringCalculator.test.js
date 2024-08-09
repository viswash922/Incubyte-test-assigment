const { add } = require('../src/stringCalculator');

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  it('should return the number itself for a single number', () => {
    expect(add("1")).toBe(1);
  });

  it('should return the sum of two numbers', () => {
    expect(add("1,5")).toBe(6);
  });

  it('should return the sum of multiple numbers', () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });

  it('should handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  it('should support different delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  it('should throw an exception for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
  });

  it('should throw an exception listing all negative numbers', () => {
    expect(() => add("-1,-2,3")).toThrow("Negative numbers not allowed: -1, -2");
  });
});
