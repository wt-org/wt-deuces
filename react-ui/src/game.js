import { Game, PlayerView } from 'boardgame.io/core';
import { isHigherHand } from './helpers';

const Deuces = Game({
  name: 'deuces',
	setup: () => ({ tableHand: [] }),
	playerView: PlayerView.STRIP_SECRETS,
	moves: {
		playHand(G, ctx, playerHand){
			if (isHigherHand(G.tableHand, playerHand)) {
				//make copy and replace
				const tableHand = [...playerHand];
				//TO-DO: remove cards from player's hand
				//then return new tableHand to the game table
				return { ...G, tableHand };
			} else {
				//TO-DO: 
				alert("Hand played is lower than hand on table");
				return { ...G };
			}
		},
		pass(G, ctx) {
			return { ...G };
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


