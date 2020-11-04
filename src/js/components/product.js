export default class Product {
	constructor(
		productItem,
		toggleCardTextBlocks,
	) {
		this._productItem = productItem;
		this._toggleCardTextBlocks = toggleCardTextBlocks;

		this._onProductClick = this._onProductClick.bind(this);
		this._onProductMouseLeave = this._onProductMouseLeave.bind(this);
		this._onProductMouseEnter = this._onProductMouseEnter.bind(this);
	}

	init() {
		this._addListeners();
	}

	destroy() {
		this._productItem.classList.remove('product--selected');
		this._productItem.classList.remove('product--selected-hover');
		this._removeListeners();
	}

	checkSelected() {
		return this._productItem.classList.contains('product--selected');
	}

	checkDisabled() {
		return this._productItem.classList.contains('product--disabled');
	}

	toggleSelected() {
		// Проверяем на основе данных
		if (this.checkSelected()) {
			this._productItem.classList.remove('product--selected');
			this._productItem.classList.remove('product--selected-hover');

			this._toggleCardTextBlocks();
		} else {
			this._productItem.classList.add('product--selected');

			this._toggleCardTextBlocks();
		}
	}

	_onProductClick(evt) {
		evt.preventDefault();

		if (this.checkDisabled()) {
			return;
		}

		this.toggleSelected();
	}

	_onProductMouseLeave(evt) {
		evt.preventDefault();
		evt.currentTarget.blur();

		if (this.checkSelected()) {
			this._productItem.classList.add('product--selected-hover');
		}
	}

	_onProductMouseEnter(evt) {
		evt.preventDefault();

		if (this._productItem.classList.contains('product--selected-hover')) {
			this._productItem.classList.remove('product--selected-hover');
		}
	}

	_addListeners() {
		this._productItem.addEventListener('click', this._onProductClick);

		this._productItem.addEventListener('mouseleave', this._onProductMouseLeave);
		this._productItem.addEventListener('mouseenter', this._onProductMouseEnter);
	}

	_removeListeners() {
		this._productItem.removeEventListener('click', this._onProductClick);

		this._productItem.removeEventListener('mouseleave', this._onProductMouseLeave);
		this._productItem.removeEventListener('mouseenter', this._onProductMouseEnter);
	}
}
