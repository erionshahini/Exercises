// Creating a js object
const pi = 3.141596;

function doublePi(){
    return 2*pi;
}

function triplePi(){
    return 3*pi;
}
//making the js object visible
//For the first data, we must use export default 
export default pi;
export {doublePi,triplePi};
