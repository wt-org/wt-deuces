import React, { Component } from 'react';
import { Client } from 'boardgame.io/react';
import Deuces from './game.js';
import Board from './board.js';

const App = Client({
  game: Deuces,
  board: Board,
});

export default App;
