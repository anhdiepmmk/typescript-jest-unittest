import { isPositive, add } from './app';

describe('#isPositive', () => {
  it('should return true when n > 0', () => {
    expect(isPositive(1)).toBe(true);
    expect(isPositive(2)).toBe(true);
    expect(isPositive(3)).toBe(true);
  });

  it('should return false when n = 0', () => {
    expect(isPositive(0)).toBe(false);
  });

  it('should return false when n < 0', () => {
    expect(isPositive(-1)).toBe(false);
    expect(isPositive(-2)).toBe(false);
    expect(isPositive(-3)).toBe(false);
  });
});

describe('#add', () => {
  it('should return correct value', () => {
    expect(add(1, 1)).toBe(2);
    expect(add(1, 0)).toBe(1);
    expect(add(0, 1)).toBe(1);
    expect(add(0, 0)).toBe(0);
    expect(add(-2, -1)).toBe(-3);
    expect(add(2, -1)).toBe(1);
  });
});
