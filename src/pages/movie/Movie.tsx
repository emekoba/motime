import "./movie.css";
import { BiCategoryAlt } from "react-icons/bi";

type MovieProps = {
	title?: string;
	poster?: string;
};

export default function Movie({ title, poster }: MovieProps) {
	return (
		<div
			className="glass movie"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url(${poster})`,
			}}
			title={title}
		>
			<div className="movie-row1">
				<button
					className="glass movie-menu"
					style={
						{
							// background: "tomato",
						}
					}
				>
					<BiCategoryAlt color="white" size={30} />
				</button>

				{/* {title} */}
			</div>
		</div>
	);
}
