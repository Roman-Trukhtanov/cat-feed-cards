import AbstractComponent from './abstract-component';

export default class Product extends AbstractComponent {
	constructor(data, toggleCardTextBlocks) {
		super();
		this._data = data;
		this._toggleCardTextBlocks = toggleCardTextBlocks;

		this._onProductClick = this._onProductClick.bind(this);
		this._onProductMouseLeave = this._onProductMouseLeave.bind(this);
		this._onProductMouseEnter = this._onProductMouseEnter.bind(this);

		this._addListenersToProduct();
	}

	toggleSelected() {
		const productItem = this.getElement();

		// Проверяем на основе данных
		if (this._data.isSelected) {
			this._data.isSelected = false;

			this._toggleCardTextBlocks();
			productItem.classList.remove('product--selected');
			productItem.classList.remove('product--selected-hover');
		} else {
			productItem.classList.add('product--selected');
			this._data.isSelected = true;

			this._toggleCardTextBlocks();
		}
	}

	_onProductClick(evt) {
		evt.preventDefault();

		if (this._data.isDisabled) {
			return;
		}

		this.toggleSelected();
	}

	_onProductMouseLeave(evt) {
		evt.preventDefault();
		evt.currentTarget.blur();

		const productItem = this.getElement();

		if (this._data.isSelected) {
			productItem.classList.add('product--selected-hover');
		}
	}

	_onProductMouseEnter(evt) {
		evt.preventDefault();

		const productItem = this.getElement();

		if (productItem.classList.contains('product--selected-hover')) {
			productItem.classList.remove('product--selected-hover');
		}
	}

	_addListenersToProduct() {
		const productItem = this.getElement();

		productItem.addEventListener('click', this._onProductClick);

		productItem.addEventListener('mouseleave', this._onProductMouseLeave);
		productItem.addEventListener('mouseenter', this._onProductMouseEnter);
	}

	_getProductClassNames() {
		const {isSelected, isDisabled} = this._data;

		const classNames = [];

		if (isSelected) {
			classNames.push('product--selected');
		}

		if (isDisabled) {
			classNames.push('product--disabled');
		}

		return classNames.join(' ');
	}

	_getProductListItems() {
		const {items} = this._data;

		const getItemWithNum = (item) => `
			<p class="product__item-text">
				<span class="product__item-text--num">${item.num}</span>${item.text.trim()}</p>`.trim();

		const getItemWithoutNum = (item) => `<p class="product__item-text">${item.text}</p>`.trim();

		return items.map((item) => `
			<li class="product__item">
				${item.num ? getItemWithNum(item) : getItemWithoutNum(item)}
			</li>
		`.trim()).join(' ');
	}

	getTemplate() {
		const {
			id,
			title,
			mark,
			markWarning,
			weight,
		} = this._data;

		return `<a class="product ${this._getProductClassNames()}" data-product-id="${id}" href="#" aria-label="${title.big} ${title.small}" tabindex="${this._data.isDisabled ? -1 : 0}">
			<div class="product__bg-decor">
				<svg class="product__bg-svg">
					<use xlink:href="/images/sprites.svg#card-back"></use>
				</svg>
			</div>
			<div class="product__content-border">
				<div class="product__content">
					<div class="product__content-info">
						<div class="product__mark-wrap">
							<p class="product__mark product__mark--default">${mark}</p>
							<p class="product__mark product__mark--warning">${markWarning}</p>
						</div>
						<div class="product__title-wrap">
							<h3 class="product__title">
								<span class="product__title--big">${title.big}</span>
								<span class="product__title--small">${title.small}</span>
							</h3>
						</div>
						<div class="product__list-wrap">
							<ul class="product__list">
								${this._getProductListItems()}
							</ul>
						</div>
					</div>
					<div class="product__bg-img-wrap">
						<picture>
							<source type="image/webp" srcset="/images/cards/card-cat@1x.webp, /images/cards/card-cat@2x.webp 2x"/>
							<img class="product__bg-img" src="/images/cards/card-cat@1x.png" srcset="/images/cards/card-cat@2x.png 2x" alt="Cat" draggable="false"/>
						</picture>
					</div>
					<div class="product__weight-wrap">
						<b class="product__weight">
							<span class="product__weight-value">${weight.value}</span>
							<span class="product__weight--type">${weight.type}</span>
						</b>
					</div>
				</div>
			</div>
		</a>`.trim();
	}
}
