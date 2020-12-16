import { createStore as reduxCreateStore } from "redux"

export interface TaskState {
  id: string
  task: string,
  dueDate: Date,
  done: boolean
}
export interface UserState {
  uid ?: string,
  email ?: string
}
export interface IRootState {
  task: TaskState[],
  user: UserState
}

const createStore = (reducer: any, state: IRootState) => reduxCreateStore(reducer, state)

export default createStore