import React, { useState } from "react";

function App() {

  const [fullName, setFullName]=useState({
    fName:"",
    lName:""
  });

  function handleChange(event){
    //console.log(event.target.value);//TESTING.
    //When there is a change in the fName OR lName, we can get it
    const newValue=event.target.value;//Returns what user enters
    console.log(newValue)
    const inputName=event.target.name;
    console.log(inputName);//returns fName if there is change in the first input
    //retuns lName if ther eis a change inthe 2nd input
    //We will use this logic to render on the heading

    //if there is a change in the First Name input, update in the {firstName}
    //if there is a cnahge in the Last Name input, update in the {lastName}
    // if(inputName==='fName'){//If user enters any value in the first input, inputName = fName
    //   setFullName({fName:newValue})//updating fName=newValue
    // }else if(inputName=='lName'){//if user enters any value in the 2nd input, inputName=lName
    //   setFullName({lName:newValue})//updating lName=newValue
    // }

    //WE WIL HOLD THE PREVIOUS VALUE
    setFullName(prevValue=>{
      console.log(prevValue);
      
      if (inputName==="fName"){
        return {
          fName: newValue,
          lName: prevValue.lName
        };//IF THE ELSE, WE UPDATE LNAME AS NEW VALUE, AND FNAME WILL NOT CHANGE
      }else if(inputName==="lName"){
        return {
          fName: prevValue.fName,
          lName: newValue
        };
      }})}

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input 
        onChange={handleChange}
        name="fName" 
        placeholder="First Name"
        value={fullName.fName} />
        <input 
        onChange={handleChange}
        name="lName" 
        placeholder="Last Name" 
        value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

//TASK: Detect the change in First Name and Last Name inputs
//if there is a change in the First Name input, update in the {firstName}
//if there is a cnahge in the Last Name input, update in the {lastName}
//Hello {firstName} {lastName}