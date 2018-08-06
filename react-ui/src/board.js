import React, { Component } from 'react';
import Table from './Table';
import PlayerHand from './PlayerHand';
import './board.css';


class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableCards: [],
    };
  }

  componentDidMount() {
  }

  handlePlayerPlay(cards) {
    this.setState({tableCards: cards});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Deuces</h2>
        </div>
        <div className="App-body">
          <div className="Table">
            <Table tableCards={this.state.tableCards}/>
          </div>
          <div className="Player-hand">
            <PlayerHand handlePlayerPlay={this.handlePlayerPlay.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
