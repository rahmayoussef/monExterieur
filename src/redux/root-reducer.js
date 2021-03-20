import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import boutiqueReducer from "./boutique/boutique.reducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  boutique: boutiqueReducer,
});

export default persistReducer(persistConfig, rootReducer);
