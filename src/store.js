import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/userSlice'
import showSideBar from './features/showSideBar'
import appApi from './services/appApi'


import storage from 'redux-persist/lib/storage'
import {combineReducers} from 'redux'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'


const reducer = combineReducers({
  user: userSlice,
  sidebar: showSideBar,
  [appApi.reducerPath]: appApi.reducer,

})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [appApi.reducerPath],
}


const persistedReducer = persistReducer(persistConfig, reducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, appApi.middleware]
})

export default store;