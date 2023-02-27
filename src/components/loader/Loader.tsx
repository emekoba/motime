import "./loader.css";
import { RotatingLines } from "react-loader-spinner";

type loadingProps = {
	loading: boolean;
};

export default function Loader({ loading }: loadingProps) {
	return (
		<>
			{loading && (
				<div className="loader">
					<RotatingLines
						strokeColor="white"
						strokeWidth="5"
						animationDuration="0.75"
						width="40"
						visible={true}
					/>
				</div>
			)}
		</>
	);
}
