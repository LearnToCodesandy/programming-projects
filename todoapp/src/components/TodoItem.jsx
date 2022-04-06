import React, { useContext } from 'react'
import { TodosContext } from '../context/TodosContext'

function TodoItem({todo,index}) {
  // state from context
  const [todos,setTodos,modal,setModal,selected,setSelected] = useContext(TodosContext);

  const handleDelete = (id)=>{
    const latestTodos = todos.filter((todo,ind)=> id!==ind && todo);
    setTodos(latestTodos);
  }

  const handleDone = (id)=>{
    const toggledTodos = todos.filter((todo,index)=>{
      if(index === id) {
        todo.done = !todo.done;
        return todo;
      }
      else{
        return todo;
      }
    })
    setTodos(toggledTodos);
  }

  return (
    <li onDoubleClick={()=>handleDone(index)} className={todo.done && 'done'}>
        <p className="todo-text">{todo.todo}</p>
        <span className="close-item" onClick={()=>handleDelete(index)}>&#10006;</span>
    </li>
  )
}

export default TodoItem