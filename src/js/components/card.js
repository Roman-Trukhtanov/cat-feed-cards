import Product from './product';

export default class Card {
	constructor(cardElement) {
		this._cardElement = cardElement;

		this._toggleCardTextBlocks = this._toggleCardTextBlocks.bind(this);
		this._onSaleLinkClick = this._onSaleLinkClick.bind(this);

		this._product = null;
	}

	init() {
		this._initProduct();

		// Регестрируем события на компоненте
		this._addListeners();
	}

	destroy() {
		this._removeListeners();
	}

	_initProduct() {
		const productElement = this._cardElement.querySelector('.product');

		// Создаем экземпляр продукта
		this._product = new Product(
			productElement,
			this._toggleCardTextBlocks,
		);

		this._product.init();
	}

	_toggleCardTextBlocks() {
		const cardSaleWrap = this._cardElement.querySelector('.card__sale-wrap');
		const cardDescriptionWrap = this._cardElement.querySelector('.card__description-wrap');

		if (this._product.checkSelected()) {
			cardSaleWrap.classList.add('is-hidden');
			cardDescriptionWrap.classList.remove('is-hidden');
		} else {
			cardSaleWrap.classList.remove('is-hidden');
			cardDescriptionWrap.classList.add('is-hidden');
		}
	}

	_onSaleLinkClick(evt) {
		evt.preventDefault();
		evt.currentTarget.blur();

		this._product.toggleSelected();
		this._toggleCardTextBlocks();
	}

	_addListeners() {
		const saleLink = this._cardElement.querySelector('.card__sale-link');

		if (saleLink) {
			saleLink.addEventListener('click', this._onSaleLinkClick);
		}
	}

	_removeListeners(cardItem) {
		const saleLink = cardItem.querySelector('.card__sale-link');

		if (saleLink) {
			saleLink.addEventListener('click', this._onSaleLinkClick);
		}
	}
}
