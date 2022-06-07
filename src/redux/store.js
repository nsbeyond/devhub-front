import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import logger from 'redux-logger'
import { combineReducers } from 'redux'

import entitiesStore from './entitiesStore'
import domainsStore from './domainsStore' // lose when refetch

const rootReducer = combineReducers({
  entities: entitiesStore,
  domains: domainsStore,
})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['domains'],
  whitelist: ['entities'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
})

export const persistor = persistStore(store)
