import { Game, PlayerView } from 'boardgame.io/core';
import { isHigherHand, isValidHand } from './helpers';

function newDeck() {
  let deck = [];
  for (var i = 1; i <= 13; i++) {
    for (var j = 0; j <=3; j++) {
      deck.push({rank: i, suit: j});
    }
	}
  return deck;
}

const Deuces = Game({
  name: 'deuces',
	setup: () => ({
		tableHand: [],
		players: {
      0: [],
      1: [],
		},
		hasControl: true, //if true, player's hand doesn't have to be higher than table hand
	}),
	//playerView: PlayerView.STRIP_SECRETS,
	moves: {
		start(G, ctx) {
			const deck = ctx.random.Shuffle(newDeck())
			const players = {
				0: deck.slice(0, 17),
				1: deck.slice(17, 34)
			}
			return {...G, players}
		},
		playHand(G, ctx, playerHand, playerId){
			if (playerId === ctx.currentPlayer) {
				if (isValidHand(playerHand)) {
					if (ctx.turn === 1 || G.hasControl || isHigherHand(G.tableHand, playerHand)) {
						const hasControl = false
						const tableHand = [...playerHand];

						let filteredPlayerHand = [...G.players[ctx.currentPlayer]]
						playerHand.forEach(playerCard => {
							filteredPlayerHand = filteredPlayerHand.filter(el => (!(el.rank === playerCard.rank && el.suit === playerCard.suit)))
						})
						var players = {...G.players}
						players[ctx.currentPlayer] = filteredPlayerHand;

						return { ...G, tableHand, hasControl, players};

					} else {
						alert('you can\'t play that')
					}
				} else {
					alert('invalid hand')
				}
			} else {
				alert('not your turn')
			}
		},
		pass(G, ctx) {
			const hasControl = true;
			return { ...G, hasControl };
		}
	},
	flow: {
		movesPerTurn: 1,
		endGameIf:(G, ctx)=>{
			if (G.players[ctx.currentPlayer].length === 0) {
				return { winner: ctx.currentPlayer };
			}
		}
	}
})

export default Deuces;


