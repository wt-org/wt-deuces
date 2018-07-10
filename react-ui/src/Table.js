import React, { Component } from 'react';

import { Hand, Card, CardBack } from 'react-deck-o-cards';

import './Table.css';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableCards: [],
    };
  }

  componentDidMount() {
    // { rank: 10, suit: 1 },{rank: 11, suit: 3}
  }

  render() {
    const defHandStyle = {
      maxHeight:'24vh',
      minHeight:'24vh',
      
      maxWidth:'80vw',
      padding: 0,
    };

    return (
      <div className="table--inner">
        <div className="cards--table">
          <Hand cards={this.state.tableCards} hidden={false} style={defHandStyle} onClick={() => null}/>
        </div>
      </div>
    );
  }
}

export default Table;
