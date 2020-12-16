import { loadState } from '../localStorage/localStorage'

const persistedData = loadState();

export const taskReducer = (state = persistedData || [], action: any) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.data]
    case 'REMOVE':
      return state = action.data
    case 'DONE':
      return state = action.data
    case 'TASK_RESET':
      return state = []
    default:
      return state
  }
}