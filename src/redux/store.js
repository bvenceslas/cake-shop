import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

const store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export default store;
