import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import PlayerHand from './PlayerHand';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true,
      tableCards: [],
    };
  }

  componentDidMount() {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
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
        <p className="App-intro">
          {'This is create-react-app with a custom Node/Express server'}
        </p>
        <p className="App-intro">
          {this.state.fetching
            ? 'Fetching message from API'
            : this.state.message}
        </p>
        <div className="Table">
          <Table tableCards={this.state.tableCards}/>
        </div>
        <div className="Player-hand">
          <PlayerHand handlePlayerPlay={this.handlePlayerPlay.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
