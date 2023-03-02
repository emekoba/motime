import { BiCategoryAlt } from "react-icons/bi";
import "./movie.css";

type MovieProps = {
	id: string;
	title: string;
	poster: string;
	synopsis: string;
	genre: string;
	onClick: any;
	inCatalogue: boolean;
	toggleCatalogue: any;
};

export default function Movie({
	id,
	title,
	poster,
	synopsis,
	genre,
	onClick,
	inCatalogue,
	toggleCatalogue,
}: MovieProps) {
	function addMovToCatalogue(e: React.MouseEvent<HTMLElement>) {
		toggleCatalogue(id);
		e.stopPropagation();
	}

	return (
		<div
			id={id}
			className="glass movie"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url(${poster})`,
			}}
			title={synopsis}
			onClick={(e: React.MouseEvent<HTMLElement>) => {
				e.stopPropagation();
				onClick({
					id,
					inCatalogue,
					title,
					poster,
					synopsis,
					genre,
				});
			}}
		>
			<div className="glass movie-title">{title}</div>

			<button
				title={`${inCatalogue ? "remove from" : "add to"} catalogue`}
				className="glass add-to-cat"
				onClick={addMovToCatalogue}
			>
				<BiCategoryAlt color={inCatalogue ? "red" : "white"} size={30} />
			</button>
		</div>
	);
}
