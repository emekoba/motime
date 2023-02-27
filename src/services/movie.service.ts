const API_URL = "http://localhost:1111";

const ENDPOINTS = {
	MOVIES: "/movies",
};

async function getMovies(query: string) {
	return (
		fetch(API_URL + ENDPOINTS.MOVIES + `?query=${query}`)
			.then((response) => {
				console.log(
					"🚀 ~ file: movie.service.ts:10 ~ .then ~ response:",
					response
				);
				return response.json();
			})
			// .then((data) => console.log(data))
			.catch((e) => {
				console.log(e);
				return { success: false };
			})
	);
}

export default {
	getMovies,
};
