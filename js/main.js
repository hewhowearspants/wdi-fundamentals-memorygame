var cards = [];
var cardsInPlay = [];

// generates a random number between 0 (inclusive) and a given number (not inclusive)
function generateSeed(number) {
	return Math.floor(Math.random() * number);
}

// fills cards array with cards from the cardDeck in random order
function randomizeCards() {
	cards = [];
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
	}];

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
	var messageBox = document.getElementById('message-box');
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			messageBox.innerHTML = '<h3>Match!</h3>';
			messageBox.className = 'fadein';
			setTimeout(function(){
				messageBox.className = 'fadeout';
			}, 500);
		} else {
			messageBox.innerHTML = '<h3>Try Again!</h3>';
			messageBox.className = 'fadein';
			setTimeout(function(){
				messageBox.className = 'fadeout';
			}, 500);
			for (var i = 0; i < cards.length; i++) {
				document.getElementsByTagName('img')[i].setAttribute('src', 'images/back.png');
			};
		};
		cardsInPlay = [];
	};
}

function flipCard() {
	var cardId = this.getAttribute('data-id');
	console.log('User flipped ' + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
}

function createBoard() {
	randomizeCards();
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
}

function resetBoard() {
	cardsInPlay = [];
	randomizeCards();
	for (var i = 0; i < cards.length; i++) {
		var card = document.getElementsByTagName('img')[i];
		card.setAttribute('src', 'images/back.png');
	};
}

createBoard();

document.querySelector('button').addEventListener('click', resetBoard);

