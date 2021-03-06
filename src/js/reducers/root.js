import { combineReducers } from "redux";

import dashboard from "./dashboard";
import nav from "./nav";
import session from "./session";
import tasks from "./tasks";
import language from "./language";

export default combineReducers({
  dashboard,
  nav,
  session,
  tasks,
  language
});
