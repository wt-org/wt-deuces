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
  }

  componentDidMount() {
  }

  handlePlayerPlay(cards, playerId) {
    this.props.moves.playHand(cards, playerId);
  }

  handlePass() {
    this.props.moves.pass();
  }

  handleStart() {
    this.props.moves.start();
  }

  render() {
    let winner = this.props.ctx.gameover ? <div id="winner">Winner: {this.props.ctx.gameover.winner}</div> : null

    return (
      <div className="board">
        <div className="board-header">
          <h2>Welcome to Deuces</h2>
        </div>
        <div className="board-body">
          <div className="Table">
            {winner}
            <Table tableCards={this.props.G.tableHand}/>
          </div>
          <div className="Player-hand">
            <PlayerHand
              playerId="0"
              handlePlayerPlay={this.handlePlayerPlay.bind(this)}
              handlePass={this.handlePass.bind(this)}
              playerCards={this.props.G.players[0]}
              handleStart={this.handleStart.bind(this)}
            />
            <PlayerHand
              playerId="1"
              handlePlayerPlay={this.handlePlayerPlay.bind(this)}
              handlePass={this.handlePass.bind(this)}
              playerCards={this.props.G.players[1]}
              handleStart={this.handleStart.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
