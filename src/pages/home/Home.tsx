import { useEffect, useState } from "react";
import "./home.css";
import { BiHomeAlt, BiCategoryAlt } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import Movie from "../movie/Movie";
import bg1 from "../../assets/images/bg1.jpg";
import SearchBar from "../../components/searchbar/SearchBar";
import movieService from "../../services/movie.service";

type MovieResponse = {
	success: boolean;
	data?: any;
};

export default function Home() {
	const [movieList, setMovieList] = useState<any>([]);
	const [query, setQuery] = useState("");

	useEffect(() => {
		init();
	}, [query]);

	async function init() {
		const resp: MovieResponse = await movieService.getMovies(query);
		console.log("🚀 ~ file: Home.tsx:111 ~ useEffect ~ resp:", resp);
		setMovieList([...resp.data]);
	}

	return (
		<div
			className="home"
			style={{
				backgroundSize: "cover",
				// backgroundImage: `url(${bg1})`,
			}}
		>
			<div className="menu entrance glass">
				<button title="add movie">
					<FaPlus color="white" size={28} />
				</button>

				<button title="categories">
					<BiCategoryAlt color="white" size={30} />
				</button>

				<button title="home">
					<BiHomeAlt color="white" size={30} />
				</button>
			</div>

			<SearchBar
				value={query}
				onChange={(e: any) => setQuery(e.target.value)}
			/>

			<div className="home-col1 hide-scroll">
				{movieList
					.filter((mov: any) => {
						if (query === "") return mov;
						return mov.title.toLowerCase().includes(query.toLowerCase());
					})
					.map((e: any) => (
						<Movie key={e.title} title={e["title"]} poster={e["poster"]} />
					))}

				{/* <div className="home-carousel">
					<h1>Movies</h1>
					<MoCarousel items={movieList} />
				</div> */}
			</div>
		</div>
	);
}
