function populateCards(numOfCards) {
	var cards = [];
	var i = 0;
	//need an even number of cards, dummy
	if (numOfCards % 2 !== 0) {
		return 'Please use an even number of cards';
	};
	//until the number of cards has been filled 
	while (i < numOfCards) {
		//generate a random number
		var cardSeed = Math.floor(Math.random() * 2);
		//0 is queen, 1 is king
		var card = cardSeed === 0 ? 'queen' : 'king';
		//if there are less than two of that card 
		if (!enoughCards(cards, card)) {
			//push the card to the cards array
			cards.push(card);
			i++;
		};
	};
	return cards;
}

function enoughCards(cards, card) {
	var cardCount = 0;
	//for each card currently in the cards array
	for (var j = 0; j < cards.length; j++) {
		// if the card in the array is equal to the random card generated
		if (cards[j] === card) {
			cardCount++;
		}
	}
	// return if the number of cards has reached two
	return cardCount === 2;
}

//var cards = populateCards(4);
var cards = [
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

var cardsInPlay = [];

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

flipCard(0);
flipCard(2);

