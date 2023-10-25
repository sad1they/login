import { combineReducers, configureStore } from '@reduxjs/toolkit'
import isLoggedSlice from './slices/isLoggedSlice'
import dataSlice from './slices/dataSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  data: dataSlice,
  isLogged: isLoggedSlice
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

export const persistor = persistStore(store)

export default store
