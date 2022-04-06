import React, { useState, createContext } from 'react';

export const TodosContext = createContext();

export const TodosProvider = (props) => {
    const [todos, setTodos] = useState([]);
    const [modal,setModal] = useState(false);
    const [selected,setSelected] = useState('');

    return (
        <TodosContext.Provider
            value={[todos, setTodos,modal,setModal,selected,setSelected]}
        >
            {props.children}
        </TodosContext.Provider>

    );
}