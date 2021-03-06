import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import user from "./users";
import tasks from "./tasks";
import page from "./pagereducer";

export default combineReducers({
  form: formReducer,
  user,
  tasks,
  page,
});
