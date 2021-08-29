import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const RootReducer = combineReducers({ reducer });

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;
