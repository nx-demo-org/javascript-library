import { toTitleCase, truncate, slugify } from './string-utils.js';

describe('toTitleCase', () => {
  it('should capitalize the first letter of each word', () => {
    expect(toTitleCase('hello world')).toEqual('Hello World');
  });

  it('should handle single word', () => {
    expect(toTitleCase('hello')).toEqual('Hello');
  });

  it('should handle mixed case input', () => {
    expect(toTitleCase('hELLO wORLD')).toEqual('Hello World');
  });

  it('should handle empty string', () => {
    expect(toTitleCase('')).toEqual('');
  });
});

describe('truncate', () => {
  it('should truncate long strings', () => {
    expect(truncate('hello world', 8)).toEqual('hello...');
  });

  it('should not truncate short strings', () => {
    expect(truncate('hello', 10)).toEqual('hello');
  });

  it('should use custom suffix', () => {
    expect(truncate('hello world', 9, '…')).toEqual('hello wo…');
  });

  it('should handle exact length', () => {
    expect(truncate('hello', 5)).toEqual('hello');
  });
});

describe('slugify', () => {
  it('should convert to slug format', () => {
    expect(slugify('Hello World')).toEqual('hello-world');
  });

  it('should handle special characters', () => {
    expect(slugify('Hello, World!')).toEqual('hello-world');
  });

  it('should handle multiple spaces', () => {
    expect(slugify('hello   world')).toEqual('hello-world');
  });

  it('should trim whitespace', () => {
    expect(slugify('  hello world  ')).toEqual('hello-world');
  });
});
