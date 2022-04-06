import React,{useState,useContext} from 'react'
import {TodosContext} from "../context/TodosContext";
import { FilteredContext} from '../context/FilteredContext'

function filterList(listToBeFiltered,filter){
  let temp = listToBeFiltered.filter((todo,index)=>{
      if(todo._createdAt === filter){
          return todo;
      }
  })
  return temp;
}


function TodoForm({title,selectedTemp}) {
      // states
  const [todo,setTodo] = useState('');
  const [todos,setTodos,modal,setModal,selected,setSelected] = useContext(TodosContext);
  const [filteredTodos,setFilteredTodos] = useContext(FilteredContext);
  

    // handlers
    const addTodo = (e)=>{
        e.preventDefault();
        let _createdAt = selectedTemp ? selected: new Date().toDateString();
        let latestTodo = {
          id:Math.random(),
          todo:todo,
          done:false,
          _createdAt : _createdAt
        }      
        let latestTodos = [...todos,latestTodo];
        setTodos(latestTodos);
        setTodo('');
    }

  return (
    <form className="todo-input" onSubmit={e=>addTodo(e)}>
          <label htmlFor="todo">{title}</label>
          <input type="text" name="todo" id="todo" placeholder='add a todo...'value={todo} onChange={e=>setTodo(e.target.value)}/>
    </form>
  )
}

export default TodoForm