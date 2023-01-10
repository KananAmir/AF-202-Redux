import { combineReducers } from "redux";
import { favoritesReducer } from "./favorites.reducer";

export const rootReducer = combineReducers({
  favoritesReducer,
});
