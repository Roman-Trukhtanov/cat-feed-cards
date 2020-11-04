import * as bodyScrollLock from 'body-scroll-lock';

import {
	DEFAULT_DESKTOP_WIDTH,
	DEFAULT_HEIGHT,
	DEFAULT_MOBILE_WIDTH,
} from './const';

export default {
	vw(value, base = DEFAULT_DESKTOP_WIDTH) {
		return value / base * innerWidth;
	},

	vh(value, base = DEFAULT_HEIGHT) {
		return value / base * innerHeight;
	},

	vmin(value, base = DEFAULT_MOBILE_WIDTH) {
		return value / base * Math.min(innerWidth, innerHeight);
	},

	isIE() {
		return document.documentElement.classList.contains('is-browser-ie');
	},

	isMobile() {
		return innerWidth <= 1024;
	},

	isDesktop() {
		return !this.isMobile();
	},

	lockScroll(state, element) {
		const html = document.documentElement;

		if (state) {
			bodyScrollLock.disableBodyScroll(element, {
				reserveScrollBarGap: true,
			});

			setTimeout(() => {
				html.classList.add('no-scroll');
			}, 0);
		} else {
			html.classList.remove('no-scroll');

			bodyScrollLock.enableBodyScroll(element);
		}
	},
};
