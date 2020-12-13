import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTaskAction } from '../redux/actions'

const Task = () => {
  interface ObjectTask {
    id: string,
    task: string,
    dueDate: Date,
    done: boolean
  }

  const tasks = useSelector((state: []) => state.task);
  const dispatch = useDispatch();

  const removeTask = (e: any) => {
    const id = e.target.dataset.id;
    const modState = tasks.filter((task: ObjectTask) => {
      return id !== task.id
    });
    dispatch(removeTaskAction(modState))
  }

  return (
    <section>
      {
        tasks.map((el: ObjectTask) => {
          return (
            <article className="list__task" key={el.id} >
              <p className="list__task__task">{el.task}</p>
              <p className="list__task__dueDate">{el.dueDate}</p>
              <button className={el.done ? 'green list__task__done' : 'red list__task__done'}>{el.done}</button>
              <button className="list__task__remove" data-id={el.id} onClick={removeTask}>Remove</button>
            </article>
          )
        })
      }
    </section>
  )
}

export default Task;