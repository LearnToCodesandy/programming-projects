import React, { useContext } from 'react'
import { TodosContext } from '../context/TodosContext';

function DateBox({ value }) {
  const [todos, setTodos, modal, setModal, selected, setSelected] = useContext(TodosContext);

  // handlers
  const handleModal = () => {
    let temp = selected.split(' ');
    let day = Number(temp[2]);
    if (value < 10) {
      day = ("0" + value).toString();
    }else{
      day = value.toString();
    }
    temp[2] = day;
    let val = temp.join(' ');
    setSelected(new Date(val).toDateString())
  }

  return (
    <div className={value !== null ? 'date-box' : 'date-box-transparent'} onClick={() => { setModal(true); handleModal() }}>
      {value}
    </div>
  )
}

export default DateBox;