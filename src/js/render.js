export const Position = {
	AFTERBEGIN: 'afterbegin',
	BEFOREEND: 'beforeend',
};

export const createElement = (template) => {
	const newElement = document.createElement('div');
	newElement.innerHTML = template;

	if (newElement.childNodes.length === 1) {
		return newElement.firstChild;
	}

	const fragment = document.createDocumentFragment();

	fragment.append(...newElement.childNodes);

	return fragment;
};

export const render = (container, element, place) => {
	switch (place) {
		case Position.AFTERBEGIN:
			container.prepend(element);
			break;
		case Position.BEFOREEND:
			container.append(element);
			break;
		default:
			break;
	}
};

export const unrender = (element) => {
	if (element) {
		element.remove();
	}
};
