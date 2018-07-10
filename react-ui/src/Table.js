import React, { Component } from 'react';

import { Hand, Card, CardBack } from 'react-deck-o-cards';

import './Table.css';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    const tableHandStyle = {
      maxHeight:'24vh',
      minHeight:'24vh',
      
      maxWidth:'80vw',
      padding: 0,
    };

    return (
      <div className="table--inner">
        <div className="cards--table">
          <Hand cards={this.props.tableCards} hidden={false} style={tableHandStyle} onClick={() => null}/>
        </div>
      </div>
    );
  }
}

export default Table;
