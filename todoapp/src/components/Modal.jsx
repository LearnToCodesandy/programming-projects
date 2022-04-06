import React, { useState,useContext, useEffect } from 'react'
import { TodosContext} from '../context/TodosContext'
import { FilteredContext} from '../context/FilteredContext'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem';


function filterList(listToBeFiltered,filter){
    let temp = listToBeFiltered.filter((todo,index)=>{
        if(todo._createdAt === filter){
            return todo;
        }
    })
    return temp;
}

function Modal() {
    const [todos,setTodos,modal,setModal,selected,setSelected] = useContext(TodosContext);
    const [filteredTodos,setFilteredTodos] = useContext(FilteredContext);
    
    useEffect(()=>{
        let results = filterList(todos,selected);
        setFilteredTodos(results);
    },[selected]);


  return (
    <div className={modal?"modal":"display-hide"}>
        <div className="modal-wrapper">
        <div className="modal-header">
            <h2 className="modal-title">What's up!'</h2>
            <span className="close-item" onClick={()=>setModal(false)}>&#10006;</span>
        </div>
        <div className="modal-body">
            <TodoForm title={`Todos for ${selected} day`} selectedTemp="yes"/>
            <div className="modal-list">
            {
              filteredTodos.length !== 0 ? filteredTodos.map(
                  (todo,index)=><TodoItem todo={todo} index={index} key={index}/>) 
                  : "No todos yet"
            }
            </div>
        </div>
        </div>
    </div>
  )
}

export default Modal