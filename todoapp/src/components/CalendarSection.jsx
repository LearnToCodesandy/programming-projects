import React,{useState,useEffect, useContext} from 'react'
import DateBox from './DateBox'
import {TodosContext} from "../context/TodosContext";

function getNoOfDays(value){
  const month = value.split('-')[1];
  const year = value.split('-')[0];
  const days = new Date(year,month,0).getDate();
  return days;
}

function setDummies(number,value){
  let temp = [];
  for(let i=0;i<number;i++){
    temp[i] = i+1;
  }
  let preponeGaps = new Date(value).getDay()-1;
  let gaps = [];
  if(preponeGaps === -1){
    for(let i = 0;i<6;i++){
      gaps[i] = null;
    }
  }else{
    for(let i=0;i<preponeGaps;i++){
      gaps[i] = null;
    }
  }
  temp = [...gaps,...temp];
  return temp;
}

function CalendarSection() {

  // states
  const [ddays,setDDays] = useState([]);
  const [todos,setTodos,modal,setModal,selected,setSelected] = useContext(TodosContext);

  const handleDate = (e)=>{
    let value = e.target.value;
    setDDays(setDummies(getNoOfDays(value),value));
    let monthstring = `${value}-01`;
    let dtString = new Date(monthstring).toDateString();
    setSelected(dtString)
  }

  // effect
  useEffect(() => {
    let month = new Date().getMonth();
    if(month < 9) month = '0'+month;

    const value = `${new Date().getFullYear()}-${month}`;
    setDDays(setDummies(getNoOfDays(value),value));
    let monthstring = `${value}-01`;
    let dtString = new Date(monthstring).toDateString();
    setSelected(dtString)
  }, [])
  
  return (
    <div className="calendar-wrapper">
     
      <div className="calendar-header">
        <h1 className="welcome">Welcome, Nice to see you.</h1>
        <div className="date-form">
          <label htmlFor="date">Select a date</label>
          <input type="month" name="date" id="date" onChange={(e)=>handleDate(e)}/>
        </div>
      </div>
      <div className="calendar-body">
        <div className="selected-date-container">
          <p className="selected-date">{selected}</p>
          
          <div className="date-box-container">
          <div className="date-box-header">
            <div className="header-date">Mon</div>
            <div className="header-date">Tue</div>
            <div className="header-date">Wed</div>
            <div className="header-date">Thu</div>
            <div className="header-date">Fri</div>
            <div className="header-date">Sat</div>
            <div className="header-date">Sun</div>
          </div>
            <div className="date-dates">
             {
               ddays.map(((dayBox,index)=><DateBox value={dayBox} key={Math.random()}/>))
             }
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalendarSection