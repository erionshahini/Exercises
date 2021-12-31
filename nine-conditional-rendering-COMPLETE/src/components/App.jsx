import React from "react";
import Login from './Login'

var isLoggedin=false;
// function renderConditionally(){
//   if(isLoggedin===true){
//     return <h1>Hello</h1>
//   }else{
//     return <Login />;
//   }
// }
/* 
We can not use statements inside {} expressions
We CAN ise TERNARY operator for conditional rendering 
 { isLoggedin === true ? <h1>Hello</h1> : <Login /> }
 */

 //If it is too late, render : Go to Bed
 const currentTime= new Date(2021,11,1,14).getHours();
 console.log(currentTime);
function App() {
  return (
    <div className="container">
      
    {/* {renderConditionally()} */}
   { isLoggedin === true ? <h1>Hello</h1> : <Login /> }
   {currentTime > 12 ? <h1>Go to Bed</h1> : <h1>Kepp studying It is not too late</h1>}
   {currentTime > 12 && <h1>It is greater than 12</h1>}
   {/* THIS MEANS , IF CURRENT TIME is GREATER THAN 12
   THEN RETURN  <h1>Go to Bed</h1> OTHERWISE DON'T RETURN ANYTHING*/}
    </div>
  );
}

export default App;
