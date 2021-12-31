import React from 'react';
import Heading from './Heading';
import List from './List';
import {add,subtract,multiply, divide} from "./calculator";


function App(){
    return <div>
        <Heading />
        <List />
        <ol>
            <li> Sum : {add(3,4)}</li>
            <li> Difference : {subtract(5,7)}</li>
            <li> Product : {multiply(5,6)}</li>
            <li> Division : {divide(10,2)}</li>
        </ol>
    </div>

}

export default App;