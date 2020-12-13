import { createStore as reduxCreateStore } from "redux"

const createStore = (reducer: any, state: []) => reduxCreateStore(reducer, state)

export default createStore