import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { basketReducer } from "./basket.reducer";

export const rootReducer = combineReducers({
  counterReducer,
  basketReducer,
});
