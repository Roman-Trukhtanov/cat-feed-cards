import Card from './card';

let cardItems = [];

const init = (cardElements) => {
	if (!cardElements) {
		return;
	}

	for (const cardElement of cardElements) {
		const card = new Card(cardElement);
		card.init();

		cardItems.push(card);
	}
};

const destroy = () => {
	if (cardItems.length) {
		for (const cardItem of cardItems) {
			cardItem.destroy();
		}

		cardItems = [];
	}
};

export default {
	init,
	destroy,
};
