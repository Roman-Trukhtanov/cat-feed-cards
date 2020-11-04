import {fetch as fetchPolyfill} from 'whatwg-fetch';

export const getData = async (url) => {
	const response = await fetchPolyfill(url);

	if (!response.ok) {
		const message = `An error has occured: ${response.status}`;
		throw new Error(message);
	}

	const data = await response.json();

	return {data};
};
