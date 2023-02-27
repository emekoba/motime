import { useEffect, useState } from "react";
import "./home.css";
import { BiHomeAlt, BiCategoryAlt } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import Movie from "../movie/Movie";
import bg1 from "../../assets/images/bg1.jpg";
import SearchBar from "../../components/searchbar/SearchBar";
import movieService from "../../services/movie.service";

export default function Home() {
	const [movieList, setMovieList] = useState([
		{
			title: "Star Wars",
			images: [
				"https://c4.wallpaperflare.com/wallpaper/356/487/776/star-wars-background-darth-vader-darth-vader-wallpaper-preview.jpg",
				"https://c4.wallpaperflare.com/wallpaper/86/598/484/star-wars-millennium-falcon-star-wars-the-force-awakens-c-3po-wallpaper-preview.jpg",
			],
		},
		{
			title: "Iron Man",
			images: [
				"https://media.wired.com/photos/59ef63d734ce5c0e0a752f30/16:9/w_960,h_540,c_limit/IronMan3-HP.jpg",
			],
		},
		{
			title: "Star Wars",
			images: [
				"https://c4.wallpaperflare.com/wallpaper/356/487/776/star-wars-background-darth-vader-darth-vader-wallpaper-preview.jpg",
				"https://c4.wallpaperflare.com/wallpaper/86/598/484/star-wars-millennium-falcon-star-wars-the-force-awakens-c-3po-wallpaper-preview.jpg",
			],
		},
		{
			title: "Star Wars",
			images: [
				"https://c4.wallpaperflare.com/wallpaper/356/487/776/star-wars-background-darth-vader-darth-vader-wallpaper-preview.jpg",
				"https://c4.wallpaperflare.com/wallpaper/86/598/484/star-wars-millennium-falcon-star-wars-the-force-awakens-c-3po-wallpaper-preview.jpg",
			],
		},
		{
			title: "Iron Man",
			images: [
				"https://media.wired.com/photos/59ef63d734ce5c0e0a752f30/16:9/w_960,h_540,c_limit/IronMan3-HP.jpg",
			],
		},
		{
			title: "Star Wars",
			images: [
				"https://c4.wallpaperflare.com/wallpaper/356/487/776/star-wars-background-darth-vader-darth-vader-wallpaper-preview.jpg",
				"https://c4.wallpaperflare.com/wallpaper/86/598/484/star-wars-millennium-falcon-star-wars-the-force-awakens-c-3po-wallpaper-preview.jpg",
			],
		},
		{
			title: "Star Wars",
			images: [
				"https://c4.wallpaperflare.com/wallpaper/356/487/776/star-wars-background-darth-vader-darth-vader-wallpaper-preview.jpg",
				"https://c4.wallpaperflare.com/wallpaper/86/598/484/star-wars-millennium-falcon-star-wars-the-force-awakens-c-3po-wallpaper-preview.jpg",
			],
		},
		{
			title: "Iron Man",
			images: [
				"https://media.wired.com/photos/59ef63d734ce5c0e0a752f30/16:9/w_960,h_540,c_limit/IronMan3-HP.jpg",
			],
		},
		{
			title: "Star Wars",
			images: [
				"https://c4.wallpaperflare.com/wallpaper/356/487/776/star-wars-background-darth-vader-darth-vader-wallpaper-preview.jpg",
				"https://c4.wallpaperflare.com/wallpaper/86/598/484/star-wars-millennium-falcon-star-wars-the-force-awakens-c-3po-wallpaper-preview.jpg",
			],
		},
		{
			title: "Star Wars",
			images: [
				"https://c4.wallpaperflare.com/wallpaper/356/487/776/star-wars-background-darth-vader-darth-vader-wallpaper-preview.jpg",
				"https://c4.wallpaperflare.com/wallpaper/86/598/484/star-wars-millennium-falcon-star-wars-the-force-awakens-c-3po-wallpaper-preview.jpg",
			],
		},
		{
			title: "Star Wars",
			images: [
				"https://c4.wallpaperflare.com/wallpaper/356/487/776/star-wars-background-darth-vader-darth-vader-wallpaper-preview.jpg",
				"https://c4.wallpaperflare.com/wallpaper/86/598/484/star-wars-millennium-falcon-star-wars-the-force-awakens-c-3po-wallpaper-preview.jpg",
			],
		},
		{
			title: "Star Wars",
			images: [
				"https://c4.wallpaperflare.com/wallpaper/356/487/776/star-wars-background-darth-vader-darth-vader-wallpaper-preview.jpg",
				"https://c4.wallpaperflare.com/wallpaper/86/598/484/star-wars-millennium-falcon-star-wars-the-force-awakens-c-3po-wallpaper-preview.jpg",
			],
		},
		{
			title: "Iron Man",
			images: [
				"https://media.wired.com/photos/59ef63d734ce5c0e0a752f30/16:9/w_960,h_540,c_limit/IronMan3-HP.jpg",
			],
		},
		{
			title: "Star Wars",
			images: [
				"https://c4.wallpaperflare.com/wallpaper/356/487/776/star-wars-background-darth-vader-darth-vader-wallpaper-preview.jpg",
				"https://c4.wallpaperflare.com/wallpaper/86/598/484/star-wars-millennium-falcon-star-wars-the-force-awakens-c-3po-wallpaper-preview.jpg",
			],
		},
	]);
	const [query, setQuery] = useState("");

	useEffect(() => {
		init();
	}, []);

	async function init() {
		const resp = await movieService.getMovies(query);
		console.log("🚀 ~ file: Home.tsx:111 ~ useEffect ~ resp:", resp);
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
					.filter((mov) => {
						if (query === "") return mov;
						return mov.title.toLowerCase().includes(query.toLowerCase());
					})
					.map((e) => (
						<Movie key={e.title} title={e.title} image={e["images"][0]} />
					))}

				{/* <div className="home-carousel">
					<h1>Movies</h1>
					<MoCarousel items={movieList} />
				</div> */}
			</div>
		</div>
	);
}
