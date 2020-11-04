import {createElement} from '../render';

export default class AbstractComponent {
	constructor() {
		if (new.target === AbstractComponent) {
			throw new Error('Can\'t instantiate AbstractComponent, only concrete one.');
		}

		this._element = null;
	}

	getElement() {
		if (!this._element) {
			this._element = createElement(this.getTemplate());
		}

		return this._element;
	}

	removeElement() {
		this._element = null;
	}

	// eslint-disable-next-line class-methods-use-this
	getTemplate() {
		throw new Error('Abstract method not implemented: getTemplate');
	}
}
