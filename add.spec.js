import add from './add.js';

describe('add', () => {
  it('returns the sum of two numbers', () => {
    const result = add(4, 2);
    expect(result).toBe(6);
  });

  it('should not add strings', () => {
    const result = add(4, '2');
    expect(result).toBe(6);
  });
});

// '2' -> fail, because it is a string!
