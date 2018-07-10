import React, { Component } from 'react';

import { Hand, Card, CardBack } from 'react-deck-o-cards';

class PlayerHand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerCards: [],
    };
  }

  componentDidMount() {
    //{ rank: 1, suit: 0 },{rank: 2, suit: 3}
    //ajax call to get cards for this hand
  }

  _handleCardClick(e) {
    console.log(`card in position ${e} clicked`)
  }

  _handleNewGame(e) {
    if (e.target.id === `new-game`) {
      console.log(`new game!`)
    }
  }

  render() {
    const defHandStyle = {
      maxHeight:'34vh',
      minHeight:'34vh',
      
      maxWidth:'100vw',
      padding: 0,
    };
    
    let {playerCards} = this.state;

    let newGame = playerCards.length ? <p>Your hand:</p> : <button id="new-game" onClick={(e) => this._handleNewGame(e)}>Start a New Game!</button>

    return (
      <div>
        {newGame}
        <Hand cards={playerCards} hidden={false} style={defHandStyle} onClick={(e) => this._handleCardClick(e)}/>
      </div>
    );
  }
}

export default PlayerHand;