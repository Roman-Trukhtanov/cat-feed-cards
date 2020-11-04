import AbstractComponent from './abstract-component';

export default class CardListItem extends AbstractComponent {
	getTemplate() {
		return '<li class="cards__item"></li>'.trim();
	}
}
