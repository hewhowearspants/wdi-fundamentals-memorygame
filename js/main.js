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

var cards = populateCards(4);
var cardsInPlay = [];
console.log(cards);
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log('User flipped ' + cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log('User flipped ' + cardTwo);
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
	} else {
		alert('Sorry, try again')
	}
}