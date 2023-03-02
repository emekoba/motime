const API_URL = "http://localhost:1111";

const ROUTES = {
	movies: "/movies",
	catalogue: "/catalogue",
};

const ENDPOINTS = {
	create: "/create",
	addMov: "/to/",
	remMov: "/from/",
};

export type MResponse = {
	success: boolean;
	data?: any;
};

export type MovieARGS = {
	id: string;
	title: string;
	poster: string;
	genre: string;
	synopsis: string;
	inCatalogue: boolean;
};

async function getMovies(query: string, sort: string) {
	return fetch(
		API_URL +
			ROUTES.movies +
			(query?.length >= 1 ? `?query=${query}` : "") +
			(sort?.length >= 1 ? `?sort=${sort}` : "")
	)
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

async function getCatalogue() {
	return fetch(API_URL + ROUTES.catalogue)
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

async function toggleCatalogue(id: string, inCat: boolean) {
	return fetch(
		API_URL +
			ROUTES.catalogue +
			(inCat ? ENDPOINTS.remMov : ENDPOINTS.addMov) +
			id
	)
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

async function createMovie(form: MovieARGS) {
	console.log("🚀 ~ file: movie.service.ts:41 ~ createMovie ~ form:", form);
	return fetch(API_URL + ROUTES.movies + ENDPOINTS.create, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(form),
	})
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
	createMovie,
	getCatalogue,
	toggleCatalogue,
};
