import { RiCloseFill } from "react-icons/ri";
import "./movie.css";
import { BiCategoryAlt } from "react-icons/bi";

type MoviePreviewProps = {
	id: string;
	title: string;
	poster: string;
	genre: string;
	synopsis: string;
	inCatalogue: boolean;
	onClose: any;
	toggleCatalogue: any;
};

const defaultBackDrop: string =
	"https://edge.mwallpapers.com/photos/3d-abstract/abstract/material-design-colors-android-iphone-hd-wallpaper-background-downloadhd-wallpapers-desktop-background-android-iphone-1080p-4k-wcghy.jpg";

export default function MoviePreview({
	id,
	title,
	poster,
	genre,
	synopsis,
	inCatalogue,
	onClose,
	toggleCatalogue,
}: MoviePreviewProps) {
	return (
		<div className="glass movie-preview">
			<div className="preview-header">
				{/* <button
					className="glass close-preview"
					onClick={() => toggleCatalogue(id)}
				>
					<BiCategoryAlt size={30} color={inCatalogue ? "red" : "white"} />
				</button> */}

				<button className="glass close-preview" onClick={onClose}>
					<RiCloseFill size={30} color={"white"} />
				</button>
			</div>

			<div
				style={{
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundImage: `url(${poster || defaultBackDrop})`,
				}}
			/>

			<div className="glass movie-preview-info">
				<h2>
					<span>title: </span>
					{title}
				</h2>
				<h4>
					<span>genre: </span>
					{genre}
				</h4>
				<h4>
					<span>synopsis: </span>
					{synopsis}
				</h4>
			</div>
		</div>
	);
}
