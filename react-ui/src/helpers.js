//suit rules from imported library:    0=clubs, 1=diamonds, 2=hearts, 3=spades
//map to these rules:   diamonds=10, clubs=11, hearts=12, spades=13
//rank rules:  1-13, but map 1(ace)=14 and 2(deuce)=15

//ranking of 5 five card hands

// invalid hand = 0
// single = 1
// pair = 2
// straight = 3
// flush = 4
// full house = 5
// four of a kind = 6
// straight flush = 7

//add alerts

const SUIT_MAP = {
  0: 11,
  1: 10,
  2: 12,
  3: 13
}

//each hand is an array
//each card is an object within that array

export function cardMapforComparison(card) {
  let {rank, suit} = card;
  let newRank = (rank === 1 || rank === 2) ? rank + 13 : rank;
  let newSuit = SUIT_MAP[suit];
  return {
    rank: newRank,
    suit: newSuit
  } 
}

export function handMapforComparison(hand) {
  return hand.map(card => cardMapforComparison(card))
}

export function isHigherHand(tableHand, playerHand) { //FINAL ONE
  let mappedTableHand = handMapforComparison(tableHand);
  let mappedPlayerHand = handMapforComparison(playerHand);

  let result = false
  let tableHandValue = false
  let playerHandValue = false

  if (isSingle(mappedPlayerHand) === 0) {
    if (isPair(mappedPlayerHand) === 0) {
      if (isFiveCardHand(mappedPlayerHand) === 0) {
        playerHandValue = 0
      } else {
        playerHandValue = isFiveCardHand(mappedPlayerHand)
      }
    } else {
      playerHandValue = isPair(mappedPlayerHand)
    }
  } else {
    playerHandValue = isSingle(mappedPlayerHand)
  }

  //gives 0 if it's an invalid hand, otherwise it'll give the value of the hands

  if (isSingle(mappedTableHand) === 0) {
    if (isPair(mappedTableHand) === 0) {
      if (isFiveCardHand(mappedTableHand) === 0) {
        tableHandValue = 0
      } else {
        tableHandValue = isFiveCardHand(mappedTableHand)
      }
    } else {
      tableHandValue = isPair(mappedTableHand)
    }
  } else {
    tableHandValue = isSingle(mappedTableHand)
  }

  if (tableHandValue === playerHandValue) {
    let highestCardinPlayerHand = highestCardandRank(mappedPlayerHand)
    let highestCardinTableHand = highestCardandRank(mappedTableHand)
    //check for flush
    if (tableHandValue === 4) {
      if (highestCardinPlayerHand.highestSuit > highestCardinTableHand.highestSuit) {
        result = true
      } else if (highestCardinPlayerHand.highestSuit === highestCardinTableHand.highestSuit) {
        if (highestCardinPlayerHand.highestRank > highestCardinTableHand.highestRank) {
          result = true
        }
      }
    } else { //check for everything else
      if (highestCardinPlayerHand.highestRank > highestCardinTableHand.highestRank) {
        result = true
      } else if (highestCardinPlayerHand.highestRank === highestCardinTableHand.highestRank) {
        if (highestCardinPlayerHand.highestSuit > highestCardinTableHand.highestSuit) {
          result = true
        }
      }
    }

  }
  return result
}


export function isSingle(hand) {
  let result = 0
  if (hand.length === 1) {
    result = 1
  } 
  return result
}

export function isPair(hand) {
  let result = 0
  if (hand.length === 2 && (hand[0].rank === hand[1].rank)) {
    result = 2
  }
  return result
}

export function isFiveCardHand(hand) {
  let result = 0
  let rankOfAllCards = []
  let suitOfAllCards = new Set()
  if (hand.length === 5) {
    for (var i = 0; i < hand.length; i++) {
      rankOfAllCards.push(hand[i].rank)
      suitOfAllCards.add(hand[i].suit)
    }
    rankOfAllCards.sort(function(a, b){return a - b})

    let straight = false
    let flush = false
    let full_house = false
    let four_kind = false      

    //check if straight
    let tempStraight = true
    for (var y = 0; y < rankOfAllCards.length - 1; y++) {
      let difference = rankOfAllCards[y+1] - rankOfAllCards[y]
      if (difference !== 1) {
        tempStraight = false
      }
    }
    if (tempStraight === false) {
      straight = false 
    } else { 
      straight = true
    }

    //check if flush
    if (suitOfAllCards.size === 1) {
      flush = true
    }

    //check if four of a kind or full house
    var countOfCards = {}
    for (var w = 0; w < rankOfAllCards.length; w++) {
      if (countOfCards.hasOwnProperty(rankOfAllCards[w].toString())) {
        countOfCards[rankOfAllCards[w]]++
      } else {
        countOfCards[rankOfAllCards[w]] = 1
      }
    }

    let tempFourKind = false
    let tempOneForFourKind = false
    let tempPair = false
    let tempThreeKind = false
    for (var key in countOfCards) {
      if (countOfCards[key] === 3) {
        tempThreeKind = true
      }
      if (countOfCards[key] === 2) {
        tempPair = true
      }
      if (countOfCards[key] === 4) {
        tempFourKind = true
      }
      if (countOfCards[key] === 1) {
        tempOneForFourKind = true
      }
    }

    if (tempThreeKind === true && tempPair === true) {
      full_house = true
    }

    if (tempFourKind === true && tempOneForFourKind === true) {
      four_kind = true
    }

    let lowStraightAce = [3,4,5,14,15]
    let lowStraightDeuce = [3,4,5,6,15]

    
    if (JSON.stringify(lowStraightAce) === JSON.stringify(rankOfAllCards)) {
      straight = true
    }

    if (JSON.stringify(lowStraightDeuce) === JSON.stringify(rankOfAllCards)) {
      straight = true
    }

    if (straight === true) {
      result = 3
    }
    if (flush === true) {
      result = 4
    }

    if (full_house === true){
      result = 5
    }

    if (four_kind === true){
      result = 6
    }

    if (straight === true && flush === true){
      result = 7
    }
  }
  return result
}

export function highestCardandRank(hand) {
  let highestRank = 0
  let highestSuit = 0
  for (var i = 0; i < hand.length; i++) {
    let rank = hand[i].rank
    let suit = hand[i].suit
    if (rank > highestRank) {
      highestRank = rank
      highestSuit = suit
    }
    if (rank === highestRank) {
      if (suit > highestSuit) {
        highestRank = rank
      highestSuit = suit
      }
    }
  }
  return {highestRank: highestRank, highestSuit: highestSuit}
}

export function highestCardandRankFlush(hand) {//not done
  
}

export function isValidHand(hand) {
  let mappedHand = handMapforComparison(hand);
  return isSingle(mappedHand) || isPair(mappedHand) || isFiveCardHand(mappedHand)
}
