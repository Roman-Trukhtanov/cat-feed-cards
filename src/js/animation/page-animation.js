import utils from '../utils';

export default class PageAnimation {
	constructor(
		siteContainer,
		cardsContainer,
		cardsListWrap,
		withAnimation,
	) {
		this._siteContainer = siteContainer;
		this._cardsContainer = cardsContainer;
		this._cardsListWrap = cardsListWrap;
		this._withAnimation = withAnimation;
		this._timeline = gsap.timeline();
	}

	init() {
		if (this._withAnimation) {
			// Старт Анимации
			this._findItemsForAnimation();
			this._animatePage();
		} else {
			this._showContainers();
		}
	}

	_findItemsForAnimation() {
		this._cardsTitleWrap = this._cardsContainer.querySelector('.cards__title-wrap');
		this._cardsListItems = Array.from(this._cardsContainer.querySelectorAll('.cards__item'));
	}

	_showContainers() {
		this._siteContainer.classList.remove('visibility-hidden');
		this._cardsListWrap.classList.remove('visibility-hidden');
	}

	_getCardsTitleAnimation() {
		// Если карточек больше 3, то возвращаем упрощенную анимацию
		if (this._cardsListItems.length > 3) {
			return {
				duration: 0.5,
				yPercent: -100,
				autoAlpha: 0,
				clearProps: 'all',
			};
		}

		const cardsHalfHeight = this._cardsContainer.offsetHeight / 2;
		const cardTitleHeight = this._cardsTitleWrap.offsetHeight;

		const cardsTitleStartPos = cardsHalfHeight - cardTitleHeight;

		return {
			delay: 1,
			duration: 0.5,
			position: 'relative',
			top: cardsTitleStartPos,
			clearProps: 'all',
		};
	}

	_animateDesktop() {
		const self = this;

		this._timeline.eventCallback('onStart', () => {
			utils.lockScroll(true, document.documentElement);

			self._siteContainer.classList.remove('visibility-hidden');
		});

		this._timeline
			.from(self._cardsContainer, {
				autoAlpha: 0,
				duration: 0.7,
				clearProps: 'all',
			})
			.from(this._cardsTitleWrap, self._getCardsTitleAnimation())
			.from(this._cardsListItems, {
				onStart() {
					utils.lockScroll(false, document.documentElement);
					self._cardsListWrap.classList.remove('visibility-hidden');
				},
				xPercent: -15,
				autoAlpha: 0,
				duration: 0.7,
				stagger: 0.2,
				clearProps: 'all',
			});
	}

	_animateMobile() {
		this._showContainers();
	}

	_animatePage() {
		if (utils.isMobile()) {
			this._animateMobile();
		} else {
			this._animateDesktop();
		}
	}
}
