import {
  combineReducers,
  configureStore,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import recCardReducer from "../widgets/RecomListWidget/RecomListWidgetSlice";
import disCardReducer from "../widgets/DiscoverListWidget/DiscoverListWidgetSlice";

const rootReducers = combineReducers({
  recCards: recCardReducer,
  disCards: disCardReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
