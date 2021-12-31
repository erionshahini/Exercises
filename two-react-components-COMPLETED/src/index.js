import React from "react";
import ReactDOM from "react-dom";
//import External files to be able to use in here
import App from "./components/App";

import pi,{doublePi,triplePi} from "./components/math";
console.log(pi);//3.141596
console.log(doublePi());//6.283192
console.log(triplePi());//9.424788

//USING * TO IMPORT ALL DATA FROM math.js CLASS
import * as myVar from "./components/math";
console.log(myVar.default);//3.141596
console.log(myVar.doublePi());//6.283192
console.log(myVar.triplePi());//9.424788

ReactDOM.render(
    <div>
       <App />
       <ul>
           <li>Num 1 : {pi}</li>
           <li>Num 2 : {doublePi()}</li>
           <li>Num 3 : {triplePi()}</li>
           <li>Number 1 : {myVar.default}</li>
           <li>Number 1 : {myVar.doublePi()}</li>
           <li>Number 1 : {myVar.triplePi()}</li>
       </ul>
    </div>
,
document.getElementById("root"));