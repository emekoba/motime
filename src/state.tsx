// type dispatchType = { type: actionsType; payload: {} };
// export type actionsType = {
// 	START_LOADER: string;
// 	STOP_LOADER: string;
// };

import { createContext } from "react";
import { useReducer } from "react";

export const globalState = {
	loading: false,
};

export const actions = {
	START_LOADER: "START_LOADER",
	STOP_LOADER: "STOP_LOADER",
};

export const globalReducer = (state = globalState, action: any) => {
	switch (action.type) {
		case actions.START_LOADER:
			return { ...state, loading: true };

		case actions.STOP_LOADER:
			return { ...state, loading: false };

		default:
			return state;
	}
};
