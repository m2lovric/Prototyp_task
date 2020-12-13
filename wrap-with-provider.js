import React from "react"
import { Provider } from "react-redux"
import { combineReducers } from 'redux'

import createStore from "./src/redux/store"

import { taskReducer } from './src/redux/taskReducer'
import { userReducer} from './src/redux/userReducer'

import { saveState } from './src/localStorage/localStorage'

const allReducers = combineReducers({
  task : taskReducer,
  user : userReducer
});

const extension = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(allReducers, extension);

export default ({ element }) => {

  store.subscribe(() => {
    saveState(store.getState().task)
  })
  return <Provider store={store}>{element}</Provider>
}