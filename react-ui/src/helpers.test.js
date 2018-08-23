import * as func from './helpers';

// straight = 3
// flush = 4
// full house = 5
// four of a kind = 6
// straight flush = 7

//valid hands
let singleValidAce = [{rank: 14, suit: 0}];
let pairValidAces = [{rank: 14, suit: 0}, {rank: 14, suit: 1}];
let invalidPair = [{rank: 14, suit: 0}, {rank: 12, suit: 1}];
let validPair = [{rank: 6, suit: 3}, {rank: 6, suit: 2}];

let validStraight = [{rank: 14, suit: 0}, {rank: 12, suit: 1}, {rank: 13, suit: 3}, {rank: 10, suit: 3}, {rank: 11, suit: 1}];
let validStraight2 = [{rank: 6, suit: 2}, {rank: 8, suit: 1}, {rank: 7, suit: 3}, {rank: 5, suit: 3}, {rank: 4, suit: 1}];
let validStraightLowAce = [{rank: 14, suit: 3}, {rank: 15, suit: 2}, {rank: 3, suit: 1}, {rank: 4, suit: 0}, {rank: 5, suit: 3}];
let validStraightLowDeuce = [{rank: 3, suit: 3}, {rank: 4, suit: 2}, {rank: 5, suit: 1}, {rank: 6, suit: 0}, {rank: 15, suit: 3}];

let validFlush = [{rank: 6, suit: 3}, {rank: 8, suit: 3}, {rank: 10, suit: 3}, {rank: 5, suit: 3}, {rank: 4, suit: 3}];

let validFullHouse = [{rank: 6, suit: 3}, {rank: 6, suit: 2}, {rank: 6, suit: 1}, {rank: 5, suit: 2}, {rank: 5, suit: 3}];
let validFullHouse2 = [{rank: 3, suit: 3}, {rank: 3, suit: 2}, {rank: 7, suit: 1}, {rank: 7, suit: 2}, {rank: 7, suit: 3}];


let validFourKind = [{rank: 6, suit: 3}, {rank: 6, suit: 2}, {rank: 6, suit: 1}, {rank: 6, suit: 0}, {rank: 5, suit: 3}];

let validStraightFlush = [{rank: 10, suit: 0}, {rank: 11, suit: 0}, {rank: 12, suit: 0}, {rank: 13, suit: 0}, {rank: 14, suit: 0}];
let validStraightFlushSpades = [{rank: 10, suit: 3}, {rank: 11, suit: 3}, {rank: 12, suit: 3}, {rank: 13, suit: 3}, {rank: 14, suit: 3}];
let validLowDeuceStraightFlush = [{rank: 4, suit: 3}, {rank: 3, suit: 3}, {rank: 15, suit: 3}, {rank: 5, suit: 3}, {rank: 6, suit: 3}];

let invalidFiveCardHand = [{rank: 3, suit: 3}, {rank: 8, suit: 2}, {rank: 10, suit: 1}, {rank: 6, suit: 12}, {rank: 9, suit: 3}];



//helper function tests
it('should return rank 15 and suit 11', () => {
  expect(func.cardMapforComparison({rank: 2, suit: 0})).toEqual({rank: 15, suit: 11});
});

it('valid single should return "true"', () => {
  expect(func.isSingle(singleValidAce)).toEqual(1);
});

it('invalid single should return "false"', () => {
  expect(func.isSingle(pairValidAces)).toEqual(0);
});

it('valid pair should return "true"', () => {
  expect(func.isPair(pairValidAces)).toEqual(2);	
});

it('invalid pair should return "false"', () => {
  expect(func.isPair(singleValidAce)).toEqual(0);
  expect(func.isPair(invalidPair)).toEqual(0);
});

it('should return highest rank and suit', () => {
  expect(func.highestCardandRank(singleValidAce)).toEqual({highestRank: 14, highestSuit: 0});
  expect(func.highestCardandRank(pairValidAces)).toEqual({highestRank: 14, highestSuit: 1});
  expect(func.highestCardandRank(validStraight)).toEqual({highestRank: 14, highestSuit: 0});
  expect(func.highestCardandRank(validStraight2)).toEqual({highestRank: 8, highestSuit: 1});
  expect(func.highestCardandRank(validFullHouse)).toEqual({highestRank: 6, highestSuit: 3});
});

it('should return value of hand', () => {
  expect(func.isFiveCardHand(singleValidAce)).toEqual(0);
  expect(func.isFiveCardHand(pairValidAces)).toEqual(0);
  expect(func.isFiveCardHand(validStraight)).toEqual(3);
  expect(func.isFiveCardHand(validStraight2)).toEqual(3);
  expect(func.isFiveCardHand(validFlush)).toEqual(4);
  expect(func.isFiveCardHand(validFourKind)).toEqual(6);
  expect(func.isFiveCardHand(validFullHouse)).toEqual(5);
  expect(func.isFiveCardHand(validFullHouse2)).toEqual(5);
  expect(func.isFiveCardHand(validStraightFlush)).toEqual(7);
  expect(func.isFiveCardHand(validLowDeuceStraightFlush)).toEqual(7);
});

it('should return highest hand', () => {
  expect(func.isHigherHand(validPair, pairValidAces)).toEqual(true);
  expect(func.isHigherHand(pairValidAces, validPair)).toEqual(false);
  expect(func.isHigherHand(validPair, validPair)).toEqual(false);
  expect(func.isHigherHand(validPair, singleValidAce)).toEqual(false);
  expect(func.isHigherHand(validPair, validStraightFlush)).toEqual(false);
  expect(func.isHigherHand(validStraightFlush, validStraightFlushSpades)).toEqual(true);
  expect(func.isHigherHand(validStraightFlushSpades, validStraightFlush)).toEqual(false);
  expect(func.isHigherHand(validFullHouse2, validFullHouse)).toEqual(false);
  expect(func.isHigherHand(validFullHouse, validFullHouse2)).toEqual(true);	
  expect(func.isHigherHand(validStraightFlush, validFourKind)).toEqual(false);
  expect(func.isHigherHand(validFourKind, validStraightFlush)).toEqual(false);
  expect(func.isHigherHand(validFourKind, invalidFiveCardHand)).toEqual(false);
});



