var cards = [];
var cardsInPlay = [];
/*var cards = [
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
];*/

// generates a random number between 1 and a given number
function generateSeed(number) {
	return Math.ceil(Math.random() * number);
}

// fills cards array with cards in random order
// hardcoded for 4 cards
function populateCards() {
	var usedSeeds = [];
	var i = 0;
	// will only add 4 cards
	while (i < 4) {
		// generate a random card seed between 1 and 4
		var cardSeed = generateSeed(4);
		// if the generated seed hasn't already been generated before...
		if (!usedSeeds.includes(cardSeed)) {
			// add generated seed to list of used seeds
			usedSeeds.push(cardSeed);
			// add card object to cards array based on generated seed
			switch(cardSeed) {
				case 1: cards.push({
					rank: 'queen', 
					suit: 'hearts',
					cardImage: 'images/queen-of-hearts.png'});
					break;
				case 2: cards.push({
					rank: 'queen',
					suit: 'diamonds',
					cardImage: 'images/queen-of-diamonds.png'});
					break;
				case 3: cards.push({
					rank: 'king',
					suit: 'hearts',
					cardImage: 'images/king-of-hearts.png'});
					break;
				case 4: cards.push({
					rank: 'king',
					suit: 'diamonds',
					cardImage: 'images/king-of-diamonds.png'});
			};
			// iterates only when an unique card has been added
			i++;
		};
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

populateCards();

flipCard(0);
flipCard(2);

