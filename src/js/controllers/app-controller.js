import {Position, render} from '../render';
import Card from '../components/card';
import Cards from '../components/cards';
import CardListItem from '../components/card-list-item';
import PageAnimation from '../animation/page-animation';

export default class App {
	constructor(
		cardsData,
		siteContainer,
		cardsContainer,
		cardsListWrap,
		withAnimation,
	) {
		this._cardsData = cardsData;
		this._cardsContainer = cardsContainer;
		this._cardsListWrapItem = cardsListWrap;
		this._cards = new Cards();

		this._pageAnimation = new PageAnimation(
			siteContainer,
			cardsContainer,
			cardsListWrap,
			withAnimation,
		);
	}

	init() {
		this._renderCards();
	}

	_renderCards() {
		const cardsElement = this._cards.getElement();

		for (const cardData of this._cardsData) {
			const cardListItem = new CardListItem();
			const cardListItemElement = cardListItem.getElement();

			const cardItem = new Card(cardData);
			const cardItemElement = cardItem.getElement();

			// Добавляем целую карточку внутрь элемента LI
			render(cardListItemElement, cardItemElement, Position.BEFOREEND);

			// Добавляем элемент списка с краточкой в сам список
			render(cardsElement, cardListItemElement, Position.BEFOREEND);
		}

		// Очищение блока со списком карточек
		this._cardsListWrapItem.innerHTML = '';
		// рендер списка карточек на странице
		render(this._cardsListWrapItem, cardsElement, Position.BEFOREEND);

		// запуск анимации
		this._pageAnimation.init();
	}
}
