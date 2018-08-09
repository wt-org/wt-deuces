import { Client } from 'boardgame.io/react';
import Deuces from './game.js';
import Board from './board.js';

const App = Client({
  game: Deuces,
  board: Board,
  // multiplayer: { server: 'localhost:3000' },
  // debug: false,
});

export default App;
