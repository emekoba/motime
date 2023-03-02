import { useEffect, useReducer, useState } from "react";
import "./home.css";
import { BiHomeAlt, BiCategoryAlt } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import Movie from "../movie/Movie";
import SearchBar from "../../components/searchbar/SearchBar";
import movieService, {
	MovieARGS,
	MResponse,
} from "../../services/movie.service";
import { actions, globalReducer, globalState } from "../../state";
import Loader from "../../components/loader/Loader";
import AddMovie from "../movie/addMovie";
import MoviePreview from "../movie/MoviePreview";

enum PAGES {
	HOME = "HOME",
	CATALOGUE = "CATALOGUE",
}

export default function Home() {
	const [movieList, setMovieList] = useState<any>([]);
	const [catalogueList, setCatalogueList] = useState<any>([]);
	const [query, setQuery] = useState("");
	const [sort, setSort] = useState("");
	const [_, dispatch] = useReducer(globalReducer, globalState);
	const [homeState, setHomeState] = useState({
		addMovOpen: false,
		preview: {
			isOpen: false,
			movie: {
				id: "",
				title: "OJO",
				poster: "",
				genre: "FeelGood, Comedy",
				inCatalogue: false,
				synopsis:
					"Fresh out of college, Barry the Bee finds the prospect of working with honey uninspiring. He flies outside the hive for the first time and talks to a human, breaking a cardinal rule of his species. Barry learns that humans have been stealing and eating honey for centuries, and he realizes that his true calling is to obtain justice for his kind by suing humanity for theft.",
			},
		},
	});
	const [page, setPage] = useState<PAGES>(PAGES.HOME);

	useEffect(() => {
		init();
	}, [query, sort]);

	async function init() {
		dispatch({ type: actions.START_LOADER });
		const movResp: MResponse = await movieService.getMovies(query, sort);
		const catResp: MResponse = await movieService.getCatalogue();
		dispatch({ type: actions.STOP_LOADER });

		if (movResp.success && catResp.success) {
			const resolved = movResp.data.map((e: any) => {
				if (catResp.data.movies.includes(e._id))
					return { ...e, inCatalogue: true };

				return { ...e, inCatalogue: false };
			});

			setMovieList([...resolved]);
			setCatalogueList([...catResp.data.movies]);
		}
	}

	function dismissPanels(e: any) {
		// e.stopPropagation();
		console.log(homeState.addMovOpen);

		setHomeState({ ...homeState, addMovOpen: false });
	}

	async function createMovie(form: MovieARGS) {
		dispatch({ type: actions.START_LOADER });
		const resp: MResponse = await movieService.createMovie(form);
		dispatch({ type: actions.STOP_LOADER });
		if (resp.success) {
			setMovieList([...movieList, resp.data]);
		}
	}

	function openCreatePanel(e: any) {
		e.stopPropagation();
		setHomeState({ ...homeState, addMovOpen: true });
	}

	async function toggleCatalogue(movieId: string) {
		dispatch({ type: actions.START_LOADER });
		const movie = movieList.find((e: any) => e._id == movieId);
		console.log("🚀 ~ file: Home.tsx:76 ~ toggleCatalogue ~ movie:", movie);

		let resp: MResponse;

		resp = await movieService.toggleCatalogue(movieId, movie.inCatalogue);
		console.log(resp.data);

		dispatch({ type: actions.STOP_LOADER });
		if (!resp.success) {
			setMovieList([
				...movieList.map((e: any) => {
					if (e._id === movieId) {
						return { ...e, inCatalogue: !movie.inCatalogue };
					}
					return e;
				}),
			]);
		}

		// if
		// // const resp: MResponse = await movieService.removeMovFromCatalogue(form);
		// if (resp.success) {
		// 	setMovieList([...movieList, resp.data]);
		// }
	}

	function changePage(page: any) {
		setPage(PAGES[page.toUpperCase() as PAGES]);
	}

	function closePreview(e: any) {
		e.stopPropagation();

		console.log(homeState.preview.isOpen);
		setHomeState({
			...homeState,
			preview: { ...homeState.preview, isOpen: false },
		});
	}

	function openPreview(payload: MovieARGS) {
		setHomeState({
			...homeState,
			preview: {
				...homeState.preview,
				isOpen: true,
				movie: {
					...payload,
				},
			},
		});
	}

	return (
		<div
			className="home"
			style={{
				backgroundSize: "cover",
				// backgroundImage: `url(${bg1})`,
			}}
			onClick={dismissPanels}
		>
			<div className="menu entrance glass">
				<Loader loading={_.loading} />

				<button title="add movie" onClick={openCreatePanel}>
					<FaPlus color={"white"} size={28} />
				</button>

				<button title="your catalogue" onClick={() => changePage("catalogue")}>
					<BiCategoryAlt
						color={page == PAGES.CATALOGUE ? "red" : "white"}
						size={30}
					/>
				</button>

				<button title="home" onClick={() => changePage("home")}>
					<BiHomeAlt color={page == PAGES.HOME ? "red" : "white"} size={30} />
				</button>
			</div>
			<SearchBar
				value={query}
				onChange={(e: any) => setQuery(e.target.value)}
				onSort={(v: string) => setSort(v != "CLEAR" ? v : "")}
			/>
			<div className="home-col1 hide-scroll">
				{movieList
					.filter((mov: any) => {
						if (page == PAGES.HOME) return mov;
						else return mov.inCatalogue == true;
					})
					.map((e: any, i: number) => (
						<Movie
							inCatalogue={e.inCatalogue}
							key={e._id}
							id={e._id}
							title={e["title"]}
							poster={e["poster"]}
							synopsis={e["synopsis"]}
							genre={e["genre"]}
							toggleCatalogue={toggleCatalogue}
							onClick={openPreview}
						/>
					))}
			</div>
			{homeState.addMovOpen && <AddMovie submit={createMovie} />}
			{homeState.preview.isOpen && (
				<MoviePreview
					id={homeState.preview.movie["id"]}
					title={homeState.preview.movie["title"]}
					poster={homeState.preview.movie["poster"]}
					synopsis={homeState.preview.movie["synopsis"]}
					genre={homeState.preview.movie["genre"]}
					inCatalogue={homeState.preview.movie["inCatalogue"]}
					onClose={closePreview}
					toggleCatalogue={toggleCatalogue}
				/>
			)}
		</div>
	);
}
