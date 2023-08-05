import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import storage from "redux-persist/lib/storage";

import { persistReducer, persistStore } from "redux-persist";
import miniFigSlice from "./slices/miniFigSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, miniFigSlice);

const store = configureStore({
  reducer: {
    miniFigReducer: miniFigSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types

// export const persistor = persistStore(store);

export default store;
