import React, { useState, createContext } from 'react';

export const FilteredContext = createContext();

export const FilteredProvider = (props) => {
    const [filteredTodos, setFilteredTodos] = useState([]);

    return (
        <FilteredContext.Provider
            value={[filteredTodos, setFilteredTodos]}
        >
            {props.children}
        </FilteredContext.Provider>

    );
}