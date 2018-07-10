import React, { Component } from 'react';

import { Hand, Card, CardBack } from 'react-deck-o-cards';

class PlayerHand extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  }

  _handleClick(e) {
    console.log(`card in position ${e} clicked`)
  }

  render() {
    const defHandStyle = {
      maxHeight:'34vh',
      minHeight:'34vh',
      
      maxWidth:'100vw',
      padding: 0,
    };

    return (
      <div>
        <p>Your hand:</p>
        <Hand cards={[
          { rank: 1, suit: 0 },{rank: 2, suit: 3}
        ]} hidden={false} style={defHandStyle} onClick={(e) => this._handleClick(e)}/>
      </div>
    );
  }
}

export default PlayerHand;