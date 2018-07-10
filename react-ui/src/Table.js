import React, { Component } from 'react';

import { Hand, Card, CardBack } from 'react-deck-o-cards';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  }

  _handleClick() {
    console.log('card clicked')
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
        <Hand cards={[
          { rank: 1, suit: 0 },{rank: 2, suit: 3}
        ]} hidden={false} style={defHandStyle} onClick={() => this._handleClick()}/>
      </div>
    );
  }
}

export default Table;
