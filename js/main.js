var cards = [];
var cardsInPlay = [];
var cardDeck = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}
];

// generates a random number between 0 (inclusive) and a given number (not inclusive)
function generateSeed(number) {
	return Math.floor(Math.random() * number);
}

// fills cards array with cards from the cardDeck in random order
function randomizeCards() {
	// as long as cardDeck still has cards in it...
	while (cardDeck.length > 0) {
		var numCards = cardDeck.length;
		// generate a random card index to pull from the cardDeck...
		var cardSeed = generateSeed(numCards);
		// pull the random card from the deck and
		// push it into the cards array
		cards.push(cardDeck.splice(cardSeed, 1)[0]);
	};
}

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log('You found a match!');
		} else {
			console.log('Sorry, try again');
		}
	}
}

function flipCard(cardId) {
	console.log('User flipped ' + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMatch();
}

randomizeCards();

flipCard(0);
flipCard(2);

