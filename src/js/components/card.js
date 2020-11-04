import AbstractComponent from './abstract-component';
import Product from './product';
import {Position, render} from '../render';

export default class Card extends AbstractComponent {
	constructor(data) {
		super();
		this._data = data;

		this._toggleCardTextBlocks = this._toggleCardTextBlocks.bind(this);

		// Создаем экземпляр продукта
		this._product = new Product(
			this._data,
			this._toggleCardTextBlocks,
		);
		this._renderProduct();

		// Регестрируем события на компоненте
		this._onSaleLinkClick = this._onSaleLinkClick.bind(this);
		this._addListenersToCard();
	}

	_toggleCardTextBlocks() {
		const cardItem = this.getElement();

		const cardSaleWrap = cardItem.querySelector('.card__sale-wrap');
		const cardDescriptionWrap = cardItem.querySelector('.card__description-wrap');

		if (this._data.isSelected) {
			cardSaleWrap.classList.add('is-hidden');
			cardDescriptionWrap.classList.remove('is-hidden');
		} else {
			cardSaleWrap.classList.remove('is-hidden');
			cardDescriptionWrap.classList.add('is-hidden');
		}
	}

	_renderProduct() {
		const cardItem = this.getElement();

		const cardMainWrapItem = cardItem.querySelector('.card__main-wrap');

		const productElement = this._product.getElement();

		// Добавляем продукт в карточку
		render(cardMainWrapItem, productElement, Position.AFTERBEGIN);
	}

	_onSaleLinkClick(evt) {
		evt.preventDefault();
		evt.currentTarget.blur();

		this._product.toggleSelected();
		this._toggleCardTextBlocks();
	}

	_addListenersToCard() {
		const cardItem = this.getElement();

		const saleLink = cardItem.querySelector('.card__sale-link');

		if (saleLink) {
			saleLink.addEventListener('click', this._onSaleLinkClick);
		}
	}

	getTemplate() {
		const {id, isSelected, isDisabled, description, disabledText} = this._data;

		return `<article class="card card--${id}" data-card-id="${id}">
			<div class="card__main-wrap">
				<!-- PRODUCT -->
				<div class="card__sale-wrap ${isSelected || isDisabled ? 'is-hidden' : ''}">
					<p class="card__sale-text">Чего сидишь? Порадуй котэ,
						<a class="card__sale-link" href="#">
							<span class="card__sale-link--border">купи</span>.
						</a>
					</p>
				</div>
				
				<div class="card__description-wrap ${!isSelected ? 'is-hidden' : ''}">
					<p class="card__description">${description}</p>
				</div>
				
				<div class="card__stock-wrap ${!isDisabled ? 'is-hidden' : ''}">
					<p class="card__stock-text">${disabledText}</p>
				</div>
			</div>
		</article>`.trim();
	}
}
