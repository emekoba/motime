import "./App.css";
import Home from "./pages/home/Home";
import { useReducer } from "react";
import { globalReducer, globalState } from "./state";

function App() {
	const [state, dispatch] = useReducer(globalReducer, globalState);

	return (
		<div className="App">
			<Home />
		</div>
	);
}

export default App;
