import { combineReducers, createStore } from "redux";
import cartReducer from "./reducers/cart";
import placeReducer from "./reducers/place";

const reducer= combineReducers({
    place: placeReducer,
    cart: cartReducer,
});

const store= createStore(reducer);

export default store;


