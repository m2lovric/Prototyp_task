import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTaskAction, handleDoneStatus } from '../redux/actions';
import { IRootState, ObjectTask } from '../redux/store';

const Task = () => {
  const tasks = useSelector<IRootState, ObjectTask[]>((state) => state.task );
  const dispatch = useDispatch();

  const changeDoneStatus = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.dataset.id;
    console.log(id)
    const modState = tasks.map((task) => {
      console.log(task.id)
      if(id === task.id){
        return{
          ...task,
          done : !task.done
        }
      }else{
        return {...task}
      }
    });
    dispatch(handleDoneStatus(modState));
  }

  const removeTask = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.dataset.id;
    const modState = tasks.filter((task) => {
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
              <button className={el.done ? 'green list__task__done' : 'red list__task__done'} data-id={el.id} onClick={changeDoneStatus}>{el.done}</button>
              <button className="list__task__remove" data-id={el.id} onClick={removeTask}>Remove</button>
            </article>
          )
        })
      }
    </section>
  )
}
export default Task;