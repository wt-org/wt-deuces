import { Game } from 'boardgame.io/core';

const Deuces = Game({
  name: 'deuces',
	setup: () => ({ cells: Array(9).fill(null) }),
	moves: {
		clickCell(){}
	},
	flow: {
		endGameIf:()=>{}
	}
})

export default Deuces;