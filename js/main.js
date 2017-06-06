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

function generateSeed(number) {
	return Math.ceil(Math.random() * number);
}

function populateCards() {
	var usedSeeds = [];
	var i = 0;
	while (i < 4) {
		var cardSeed = generateSeed(4);
		if (!usedSeeds.includes(cardSeed)) {
			usedSeeds.push(cardSeed);
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

