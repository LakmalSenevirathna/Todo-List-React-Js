import { useEffect, useRef, useState } from 'react'
import './CSS/Todo.css'
import TodoItem from './TodoItem';

let count=0;

const Todo = () => {

    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);

    const add = () => {
        setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}]);
        inputRef.current.value = "";
    }

    useEffect(() => {
        console.log(todos);
    }, [todos]) 

  return (
    <div className='todo'>
      <div className="todo__header">To-Do List</div>
        <div className="todo__add">
            <input type="text" ref={inputRef}  placeholder='Add your Task' className='todo__input' />
            <div onClick={() => {add()}} className="todo__add__btn">Add</div>
        </div>
        <div className="todo__list">
            {todos.map((item, index) => {
                return <TodoItem key={index} no={item.no} text={item.text} display={item.display} />
            })}
        </div>
    </div>
  )
}

export default Todo
