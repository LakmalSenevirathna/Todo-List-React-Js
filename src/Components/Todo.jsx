import './CSS/Todo.css'

const Todo = () => {
  return (
    <div className='todo'>
      <div className="todo__header">To-Do List</div>
        <div className="todo__add">
            <input type="text" placeholder='Add your Task' className='todo__input' />
            <div className="todo__add__btn">Add</div>
        </div>
        <div className="todo__list">

        </div>
    </div>
  )
}

export default Todo
