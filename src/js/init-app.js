import PageAnimation from './animation/page-animation';
import cards from './components/cards';

// Получаем основные контейнеры
const siteContainer = document.querySelector('.site-container');
const cardsContainer = document.querySelector('.cards');
const cardsListWrap = cardsContainer.querySelector('.cards__list-wrap');
const cardElements = Array.from(cardsListWrap.querySelectorAll('.card'));

const WITH_ANIMATION = true;

const initPage = () => {
	// Инит карточек
	cards.init(cardElements);

	// Запуск анимации
	const pageAnimation = new PageAnimation(
		siteContainer,
		cardsContainer,
		cardsListWrap,
		WITH_ANIMATION,
	);

	pageAnimation.init();
};

initPage();
