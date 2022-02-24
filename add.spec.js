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

it("'cherry' + 2 is undefined", () => {
  expect(add('cherry', 2)).toBeUndefined();
});

// '2' -> fail, because it is a string!
// "cherry" + 2 is undefined!
