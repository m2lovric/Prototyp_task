import React, { FormEvent, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { newTask } from '../redux/actions'
import { db } from '../firebase/app'
import { IRootState } from '../redux/store';

const Form = () => {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');

  const dispatch = useDispatch();

  interface User {
    uid?: string
  }

  const user: User = useSelector<IRootState, object>((state) => state.user);

  const addTask = (e: FormEvent) => {
    e.preventDefault();

    if (user.uid) {
      db.collection('users').doc(user.uid).collection('tasks').add({
        task: {
          task,
          dueDate,
          done: false
        }
      }).then(res => {        
        //reset input fields after submit
        const taskReset = document.getElementById('task') as HTMLInputElement;
        const dueDateReset = document.getElementById('dueDate') as HTMLInputElement;
        taskReset.value = '';
        dueDateReset.value = '';
        return res;
      });
    } else {
      dispatch(newTask(task, dueDate));
      //reset input fields after submit
      const taskReset = document.getElementById('task') as HTMLInputElement;
      const dueDateReset = document.getElementById('dueDate') as HTMLInputElement;
      taskReset.value = '';
      dueDateReset.value = '';
    }
  }
  return (
    <form className="form" onSubmit={addTask}>
      <input type="text" placeholder="Enter a task :" id="task" className="form__input" onChange={e => setTask(e.currentTarget.value)} />
      <input type="datetime-local" id="dueDate" className="form__input" onChange={e => setDueDate(e.currentTarget.value)} />
      <button type="submit">+</button>
    </form>
  )
}

export default Form;