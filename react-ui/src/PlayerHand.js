import React, { Component } from 'react';
import axios from 'axios';

import { Hand, Card, CardBack } from 'react-deck-o-cards';

class PlayerHand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerCards: [],
      selectedCards: []
    };
  }

  componentDidMount() {
  }

  _handleCardClick(e) {
    var selectCard = this.state.playerCards[e];
    if (!this.state.selectedCards.includes(selectCard)) {
      this.setState({ selectedCards: [...this.state.selectedCards, selectCard] })
    }
  }

  _handleNewGame(e) {
    if (e.target.id === `new-game`) {
      //ajax call to get cards for this player
      axios.get('/game/new/3')
        .then((res) => console.log(`starting new game with ${res.data.id} players`))
        .then(() => this.setState({playerCards: [{rank: 2, suit: 0},{rank: 2, suit: 1},{rank: 2, suit: 2},{rank: 2, suit: 3}]}))
        .catch((error) => console.log('ERROR', error))
    }
  }

  _handlePlay(e) {
    if (e.target.id === `play-hand`) {
      this.props.handlePlayerPlay(this.state.selectedCards);
    }
  }

  render() {
    const defHandStyle = {
      maxHeight:'34vh',
      minHeight:'34vh',
      
      maxWidth:'100vw',
      padding: 0,
    };

    const selectedHandStyle = {
      maxHeight:'18vh',
      minHeight:'18vh',
      
      maxWidth:'60vw',
      padding: 0,
    };

    let {playerCards, selectedCards} = this.state;
    let currentHand = null;

    if (playerCards.length) {
      currentHand = (
        <div>
          <p>Your hand:</p>
          <Hand cards={playerCards} hidden={false} style={defHandStyle} onClick={(e) => this._handleCardClick(e)}/>
        </div>
      )
    } else {
      currentHand = <button id="new-game" onClick={(e) => this._handleNewGame(e)}>Start a New Game!</button>
    }

    let playButton = selectedCards.length ? <button id="play-hand" onClick={(e) => this._handlePlay(e)}>Play this Hand</button> : null;

    return (
      <div>
        <div className="selected-hand">
          <Hand cards={selectedCards} hidden={false} style={selectedHandStyle} onClick={(e) => this._handleCardClick(e)}/>
          {playButton}
        </div>
        <div className="current-hand">
          {currentHand}
        </div>
      </div>
    );
  }
}

export default PlayerHand;