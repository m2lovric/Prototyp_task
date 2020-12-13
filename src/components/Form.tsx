import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { newTask } from '../redux/actions'
import { db } from '../firebase/app'
import { v4 } from 'uuid';

const Form = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: []) => state.user);

  const addTask = (e: any) => {
    e.preventDefault();
    const task = e.target.task.value;
    const dueDate = e.target.duedate.value;
    e.target.task.value = '';
    e.target.duedate.value = '';
    if(user.uid){
      db.collection('users').doc(user.uid).collection('tasks').add({
        task : {
          task,
          dueDate,
          done: false
        }
      }).then(res => {
        return res;
      })
    } else {
      dispatch(newTask(task, dueDate))
    }
  }
  return (
    <form className="form" onSubmit={addTask}>
      <input type="text" name="task" placeholder="Enter a task :" id="" className="form__input" />
      <input type="datetime-local" name="duedate" id="" className="form__input" />
      <button type="submit">+</button>
    </form>
  )
}

export default Form;