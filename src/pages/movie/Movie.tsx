import "./movie.css";
import { BiCategoryAlt } from "react-icons/bi";

type MovieProps = {
	title?: string;
	image?: string;
};

export default function Movie({ title, image }: MovieProps) {
	return (
		<div
			className="glass movie"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url(${image})`,
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
