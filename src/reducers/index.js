import { combineReducers } from "redux";
import postReducer from "./reducers_posts";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  posts: postReducer,
  form: formReducer,
});

export default rootReducer;
