import { v4 } from 'uuid';
import { ObjectTask } from './store';

export const newTask = (task: string, dueDate: string) => {
  const id = () => {
    const taskId = v4();
    return taskId;
  }

  return {
    type: 'ADD',
    data: {
      id: id(),
      task,
      dueDate,
      done: false
    }
  }
}

export const addFromFirebase = (state: ObjectTask[]) => {
  return {
    type: 'ADD_FROM_FIREBASE',
    data: state
  }
}

export const handleDoneStatus = (state: ObjectTask[]) => {
  return {
    type: 'DONE',
    data: state
  }
}

export const removeTaskAction = (state: ObjectTask[]) => {
  return {
    type: 'REMOVE',
    data: state
  }
}

export const userExist = (state: object) => {
  return {
    type: 'USER_EXIST',
    data : state
  }
}

export const resetTaskState = () => {
  return {
    type: 'TASK_RESET',
  }
}