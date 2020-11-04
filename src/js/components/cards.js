import AbstractComponent from './abstract-component';

export default class Cards extends AbstractComponent {
	getTemplate() {
		return '<ul class="cards__list"></ul>'.trim();
	}
}
