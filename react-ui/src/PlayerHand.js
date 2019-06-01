import React, { Component } from 'react';
import axios from 'axios';

import './helpers';

import { Hand, Card, CardBack } from 'react-deck-o-cards';

class PlayerHand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCards: [],
    };
  }

  componentDidMount() {
  }

  _handleCardClick(e) {
    var selectCard = this.props.playerCards[e];
    if (!this.state.selectedCards.includes(selectCard)) {
      this.setState({ selectedCards: [...this.state.selectedCards, selectCard] })
    }
  }

  _handleCardClear(e) {
    if (e.target.id === `clear`) {
      this.setState({ selectedCards: []});
    }
  }

  _handleNewGame(e) {
    if (e.target.id === `new-game`) {
      this.props.handleStart();
    }
  }

  _handlePlay(e) {
    if (e.target.id === `play-hand`) {
      this.props.handlePlayerPlay(this.state.selectedCards, this.props.playerId);
      this.setState({selectedCards: []})
    }

  }

  _handlePass(e) {
    if (e.target.id === `pass`) {
      this.props.handlePass();
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

    let {selectedCards} = this.state;
    //make sure this component re-renders when props changes
    let {playerCards} = this.props;
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

    let passButton = (!selectedCards.length && playerCards.length) ? <button id="pass" onClick={(e) => this._handlePass(e)}>Pass</button> : null;
    let playButton = selectedCards.length ? <button id="play-hand" onClick={(e) => this._handlePlay(e)}>Play this Hand</button> : null;
    let clearButton = selectedCards.length ? <button id="clear" onClick={(e) => this._handleCardClear(e)}>Clear Selected Hand</button> : null;

    return (
      <div>
        {passButton}

        <div className="selected-hand">
          <Hand 
            cards={selectedCards} 
            hidden={false} 
            style={selectedHandStyle} 
            onClick={(e) => this._handleCardClick(e)}
          />
          {playButton}
          {clearButton}
        </div>
        <div className="current-hand">
          {currentHand}
        </div>
      </div>
    );
  }
}

export default PlayerHand;