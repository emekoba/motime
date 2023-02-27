import { RiSearch2Fill } from "react-icons/ri";
import "./searchbar.css";

type SearchBarProps = {
	value: string;
	onChange: any;
};

export default function SearchBar({ onChange, value }: SearchBarProps) {
	return (
		<div className="glass search-bar">
			<input value={value} onChange={onChange} />
			<RiSearch2Fill color="white" size={30} />
		</div>
	);
}
