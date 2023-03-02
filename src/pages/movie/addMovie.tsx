import "./movie.css";
import { GiPlayButton } from "react-icons/gi";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useState } from "react";

export default function AddMovie({ submit }: any) {
	const [form, setForm] = useState({
		title: "",
		genre: "",
		poster: "",
		synopsis: "",
		validate: false,
	});

	function upForm(field: string, e: any) {
		if (field == "title" && form.validate) {
			setForm({ ...form, validate: false });
		}
		setForm({
			...form,
			[`${field}`]: e.target.value,
			validate: field == "title" && form.validate ? false : form.validate,
		});
	}

	function submitForm() {
		if (form.title.length != 0) {
			submit?.(form);
			setForm({
				...form,
				title: "",
				poster: "",
				synopsis: "",
				genre: "",
				validate: false,
			});
		} else {
			setForm({ ...form, validate: true });
		}
	}

	return (
		<div className="addMovie">
			<div
				className="glass add-movie-panel"
				onClick={(e) => e.stopPropagation()}
			>
				<div
					className="add-mov-preview"
					style={{
						backgroundSize: "cover",
						backgroundImage: `url(${form.poster})`,
					}}
				>
					<GiPlayButton color="black" size={50} />
				</div>

				<div className="form">
					<input
						className="glass"
						placeholder="title"
						onChange={(e) => upForm("title", e)}
					/>

					<div
						className="err"
						style={{
							visibility: form.validate ? "visible" : "hidden",
						}}
					>
						title must be present!
					</div>

					<input
						className="glass"
						placeholder="genre"
						onChange={(e) => upForm("genre", e)}
					/>

					<input
						className="glass"
						placeholder="poster url"
						onChange={(e) => upForm("poster", e)}
					/>
					<textarea
						placeholder="synopsis"
						className="glass"
						onChange={(e) => upForm("synopsis", e)}
					/>
				</div>

				<button className="submit glass" onClick={submitForm}>
					<AiOutlineCloudUpload color="black" size={40} />
				</button>
			</div>
		</div>
	);
}
