import { loadState } from '../localStorage/localStorage.js'

const persistedData = loadState();

export const taskReducer = (state = persistedData || [], action: any) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.data]
    case 'REMOVE':
      return state = action.data
    default:
      return state
  }
}