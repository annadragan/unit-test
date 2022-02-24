import hello from './hello.js';

describe('hello', () => {
  it('should return a string "Hey Capitan!" when input is "Sindbad"', () => {
    const result = hello('Sindbad');
    expect(result).toBe('Hey Capitan!');
  });

  it('should return "Hey you!" when input is not given', () => {
    const result = hello();
    expect(result).toBe('Hey you!');
  });

  it('should return "Hey Toni!" when input is "Toni"', () => {
    const result = hello('Toni');
    expect(result).toBe('Hey Toni!');
  });
});
