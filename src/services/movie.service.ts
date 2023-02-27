const API_URL = "http://localhost:1111";

const ENDPOINTS = {
	MOVIES: "/movies",
};

async function getMovies(query: string, sort: string) {
	return fetch(API_URL + ENDPOINTS.MOVIES + `?query=${query}`)
		.then((response) => response.json())
		.then((data) => ({
			success: true,
			data,
		}))
		.catch((e) => {
			console.log(e);
			return { success: false };
		});
}

export default {
	getMovies,
};
