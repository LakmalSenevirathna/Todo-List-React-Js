import './CSS/TodoItem.css';
import tick from './Assets/tick.png';
import notTick from './Assets/not_tick.png';
import cross from './Assets/cross.png';

const TodoItem = ({no, text, display}) => {
  return (
    <div className='todoitems'>
      <div className="todoitems__container">
        <img src={notTick} alt="" />
        <img src={tick} alt="" />
        <div className="todoitem__text">{text}</div>
      </div>
      <img className='todoitems__cross__icon' src={cross} alt="" />
    </div>
  )
}

export default TodoItem
