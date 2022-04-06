// import React, { useEffect, useState } from 'react'

// function getTime(){
//     let d = new Date();
//     let today = d.toDateString();
//     return {
//         today
//     }
// }


// function Time() {

// // states
// const [today,setToday] = useState('');
// const [time,setTime] = useState({ time : new Date()});


// // effects
// useEffect(()=>{
//     setToday(new Date().toDateString());
//     let interval = setInterval(setTime({time : new Date()}));
//     return ()=>{
//         clearInterval(interval)
//     }
// },[])
//   return (
//     <div className="time">
//         <p className="today-date">{today}</p>
//         <p className="today-timer">
//             {time.time.toLocaleTimeString()}
//         </p>
//     </div>
//   )
// }

// export default Time



import React, { Component, useState } from "react";

class Time extends Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }
  currentTime() {
    this.setState({ time: new Date() });
  }
  componentDidMount() {
    this.interval = setInterval(() => this.currentTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <>
       <div className="time">
       <p className="today-date">{this.state.time.toDateString()}</p>
        <p className="today-timer">
            {this.state.time.toLocaleTimeString()}
        </p>
     </div>
      </>
    );
  }
}

export default Time;