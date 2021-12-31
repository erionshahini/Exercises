import React, { useState } from "react";

function App() {
  /* useState detects the initial contition of the variable of count
  ***useState does 2 things.
  1. useState(0) means assign count = 0
  2. setCount function detects the count variable and updates it
  
   onClick={increase} => onClick is built in event handler
   it detects when the button is clicked

   increase => will do make the change when the button is clicked. 
   incresae function will have the js code
   currently, increse function does one thing. It is to change the value of count using setCount function*/
  const [count, setCount]=useState(0);  
//increase will increase the count by 1
  function increase(){
    setCount(count+1);
  }
  // decrease will reduce count by 1
  function decrease(){
    setCount(count-1);
  }

  const [currentTime,setCurrentTime] = useState(new Date().toLocaleTimeString())
  //new Date().toLocaleDateString() => gets the local date
  // currentTime = new Date().toLocaleDateString() 
  // setCurrentTime is the function to update the current time
  //new Date().toLocaleTimeString() => gets the tocal TIME

  setInterval(updateTime,1000);
//           updateTime is being updated every 1000 milisecond
//this helps to see the updated newTime on the screen every second
//setInterval is a javascript built in handler
  function updateTime(){
    const newTime=new Date().toLocaleTimeString();
    setCurrentTime(newTime);
  }
  // Use setCurrentTime function INSIDE ANOTHER FUNCTION to update currentTime variable
  return <div className="container">
  <h1> {count} </h1>
  <button onClick={increase}>+</button>
  <button onClick={decrease}>-</button>
  <br/>
  <button style={{fontSize:"30px", width:"150px"}}>Current Time</button>
  <h1 style={{fontSize:"25px"}}> {currentTime} </h1>
</div>;
}

export default App;
// 1. Create a button with text: Current Time
// 2. Style the button to match the style
// 3. Create an h1 and to get the current time.
// 4. Make sure to use create needed objects and the clock is ticking 
// NOTE : USE setInterval(function) TO SET RENDER THE UPDATE TIMES