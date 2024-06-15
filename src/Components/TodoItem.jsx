import './CSS/TodoItem.css';
import tick from './Assets/tick.png';
import notTick from './Assets/not_tick.png';
import cross from './Assets/cross.png';

const TodoItem = ({no, text, display, setTodos}) => {

    const deleteTodo = () => {
        let data = JSON.parse(localStorage.getItem("todos"));
        data = data.filter((todo) => todo.no !== no);
        setTodos(data);
    }

    const toggle = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"));
        for(let i = 0;i<data.length;i++){
            if(data[i].no === no){
                if(data[i].display === ""){
                    data[i].display = "line-through";
                }
                else{
                    data[i].display = "";
                }
                break;
            }
        }
        setTodos(data); 
    }

  return (
    <div className='todoitems'>
      <div className={`todoitems__container ${display}`} onClick={()=>toggle(no)}>
        {display===""?
        <img src={notTick} alt="" />:
        <img src={tick} alt="" />}
        <div className="todoitem__text">{text}</div>
      </div>
      <img className='todoitems__cross__icon' onClick={() => deleteTodo()} src={cross} alt="" />
    </div>
  )
}

export default TodoItem
