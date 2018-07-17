//example hand:
let testHand = [{rank: 2, suit: 0},{rank: 2, suit: 1},{rank: 2, suit: 2},{rank: 2, suit: 3}];
//suit rules from imported library:    0=clubs, 1=diamonds, 2=hearts, 3=spades
//map to these rules:   diamonds=10, clubs=11, hearts=12, spades=13
//rank rules:  1-13, but map 1(ace)=14 and 2(deuce)=15

const suitMap = {
  0: 11,
  1: 10,
  2: 12,
  3: 13
}

function cardMapforComparison(card) {
  let {rank, suit} = card;
  let newRank = (rank === 1 || rank === 2) ? rank + 13 : rank;
  let newSuit = suitMap[suit];
  return {
    rank: newRank,
    suit: newSuit
  } 
}

function handMapforComparison(hand) {
  return hand.map(card => cardMapforComparison(card))
}

//this is the final function exported and used in the app to compare hands
//input = 2 hands, output = boolean (true if playerHand trumps tableHand)
export function isHigherHand(tableHand, playerHand) {
  //check that hands are the same amount of cards
  //if one-card hand
    //compare that card
  //if 2-card hand
    //check that both cards in hand are the same rank
    //compare highest player card to highest table card
  //if 5-card hand
    //check what kind of 5 card hand
    //compare each 5 card hand
}

function isSameAmount(hand1, hand2) {
  return hand1.length === hand2.length;
}

function compareSingleCard(card1, card2) {
  //compare rank (if same rank, then compare suit)
}

function areCardValuesEqual(card1, card2) {
  return card1.rank === card2.rank;
}

function returnHighestCard() {}




