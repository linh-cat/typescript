import { checkNumber, isNumber } from './main';

describe('check', () => {
  it('Should return true when n > 0', () => {
    expect(checkNumber(1)).toBe(true);
    expect(checkNumber(2)).toBe(true);
    expect(checkNumber(3)).toBe(true);
  });
  it('Should return false when n < 0', () => {
    expect(checkNumber(-1)).toBe(false);
    expect(checkNumber(-2)).toBe(false);
    expect(checkNumber(-3)).toBe(false);
  });
  it('Should return false when n = 0', () => {
    expect(checkNumber(0)).toBe(false);
  });
});

describe('check', () => {
  it('Should return true when n is number', () => {
    expect(isNumber(1)).toBe(true);
    expect(isNumber(2)).toBe(true);
    expect(isNumber(3)).toBe(true);
  });

  it('Should return false when n is not number', () => {
    expect(isNumber('linh')).toBe(false);
  });
});
