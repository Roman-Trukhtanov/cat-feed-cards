import {getData} from './api';
import {Position} from './render';

import App from './controllers/app-controller';

// Получаем основные контейнеры
const siteContainer = document.querySelector('.site-container');
const cardsContainer = document.querySelector('.cards');
const cardsListWrap = cardsContainer.querySelector('.cards__list-wrap');

const CARDS_DATA_URL = '/data/cards-data.json';

const WITH_ANIMATION = true;

const initApp = (data) => {
	const app = new App(
		data,
		siteContainer,
		cardsContainer,
		cardsListWrap,
		WITH_ANIMATION,
	);

	app.init();
};

const showError = () => {
	const errorMsgItem = '<div class="errorMsg">Упс, что-то пошло не так... <br> Попробуйте обновить страницу.</div>';

	document.body.insertAdjacentHTML(Position.AFTERBEGIN, errorMsgItem);
};

// Простая имитация загрузки данных с сервера
getData(CARDS_DATA_URL).then(({data}) => {
	initApp(data);
}).catch(() => {
	showError();
});
