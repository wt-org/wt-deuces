import * as func from './helpers';

it('loads helper test file', () => {
  expect(true).toBe(true);
});

//end to end tests
it('should use an exported function', () => {
  expect(func.isHigherHand()).toBe('test string');
});

//helper function tests
it('should use an exported function', () => {
  expect(func.cardMapforComparison({rank: 2, suit: 0})).toEqual({rank: 15, suit: 11});
});

