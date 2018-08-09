import React, { Component } from 'react';
import Table from './Table';
import PlayerHand from './PlayerHand';
import './board.css';
import PropTypes from 'prop-types';


class Board extends Component {
  static propTypes = {
    G: PropTypes.any.isRequired,
    ctx: PropTypes.any.isRequired,
    moves: PropTypes.any.isRequired,
    playerID: PropTypes.string,
    isActive: PropTypes.bool,
    isMultiplayer: PropTypes.bool,
  };
  
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
      <div className="board">
        <div className="board-header">
          <h2>Welcome to Deuces</h2>
        </div>
        <div className="board-body">
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
