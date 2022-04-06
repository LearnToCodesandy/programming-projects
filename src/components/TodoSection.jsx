import React, { useState,useContext, useEffect } from 'react'
import {TodosContext} from "../context/TodosContext";
import TodoItem from "./TodoItem";
import Time from "./Time";
import TodoForm from './TodoForm';

function TodoSection() {

  const [quote,setQuote] = useState({text:'Hardwork is the key to success',author:'unknown'});
  const [todos,setTodos,modal,setModal,selected,setSelected] = useContext(TodosContext);


  const getQuote = async ()=>{
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();
    const length = data.length;
    const index = Math.floor(Math.random()*length);
    setQuote(data[index]);
  }
  // effects
  useEffect(()=>{getQuote()},[])


  return (
    <>
      <div className="todo-header">
        <div className="quote">
          <h2 className="quote-text">{quote.text}</h2>
          <span className="author">~ {quote.author}</span>
        </div>
        <Time/>
      </div>
      <div className="todo-body">
        <TodoForm title={'Add today\'s todo'}/>
        <div className="todos-container">
          <h3>All Todos</h3>
          
          <p className={todos.length ? "todos-count" : 'display-hide'}>{todos.length} todos left!!!</p>
          <nav>
            {
              todos.length !== 0 ? todos.map((todo,index)=><TodoItem todo={todo} index={index} key={index}/>) : "No todos yet"
            }
          </nav>
        </div>
      </div>
    
    </>
  )
}

export default TodoSection