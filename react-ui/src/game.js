import { Game, PlayerView } from 'boardgame.io/core';
import { isHigherHand } from './helpers';

const Deuces = Game({
  name: 'deuces',
	setup: () => ({ 
		tableHand: [],
		players: {
      0: 'player 0 state',
      1: 'player 1 state',
		},
		//if true, player's hand doesn't have to be higher than table hand
		hasControl: true,
	}),
	playerView: PlayerView.STRIP_SECRETS,
	moves: {
		playHand(G, ctx, playerHand){
			if (G.hasControl || isHigherHand(G.tableHand, playerHand)) {
				const tableHand = [...playerHand];
				const hasControl = false;
				//TO-DO: remove cards from player's hand
				//then return new tableHand to the game table
				return { ...G, tableHand, hasControl };
			} else {
				//TO-DO: 
				alert("Hand played is lower than hand on table");
				return { ...G };
			}
		},
		pass(G, ctx) {
			const hasControl = true;
			return { ...G, hasControl };
		}
	},
	flow: {
		movesPerTurn: 1,
		endGameIf:()=>{
			//playerHand is empty
		}
	}
})

export default Deuces;


