import { RiSearch2Fill } from "react-icons/ri";
import { MdOutlineSort } from "react-icons/md";
import "./searchbar.css";
import { useState } from "react";

type SearchBarProps = {
	value: string;
	onChange: any;
	onSort: any;
};

export default function SearchBar({ onChange, value, onSort }: SearchBarProps) {
	const [sortOpen, setsortOpen] = useState(true);

	return (
		<div className="glass search-bar">
			<input value={value} onChange={onChange} />

			<RiSearch2Fill color="white" size={30} />
			<button onClick={() => setsortOpen(!sortOpen)}>
				<MdOutlineSort color="white" size={30} />
			</button>

			{sortOpen && (
				<div className="glass sort-menu">
					<button onClick={() => onSort("ASC")}>ASC</button>
					<button onClick={() => onSort("ASC")}>DESC</button>
					<button onClick={() => onSort("CLEAR")}>CLEAR</button>
				</div>
			)}
		</div>
	);
}
