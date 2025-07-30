import { examplePublishableLibrary } from './example-publishable-library.js';

describe('examplePublishableLibrary', () => {
  it('should work', () => {
    expect(examplePublishableLibrary()).toEqual('example-publishable-library');
    expect(true).toEqual(false);
  });
});
