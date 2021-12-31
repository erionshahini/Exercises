import React from "react";
import contacts from "../contacts";
import Avatar from "./Avatar";
//.. means parent level
import Card from "./Card";

//Create createCard function to loops through the contacts array
//singleContact parameter get each different contacts data in each loop
//contacts[0], contacts[1], contacts[2]
//Then we use . notation to get the properties of each singleContact
//MAP:
/* Map takes a function parameter. In our example it is createCard function
contacts.map(createCard) MEANS  =>>>>>>> Gets each index and lopp through until the array lenght is done

Loop 1 : singleConract is equal to the first object
  {
    name: "Jim Carrey",
   imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVl6f7CWwdVCgb_bEHUT9ZuoY8wz50EET_dw&usqp=CAU",
   phone: "+123 456 789",
   email: "j@carrey.com" 
  }

  singleContact.name => Jim Carrey

Loop 2 : singleConract is equal to the second object
{
    name: "Jack Bauer",
    imgURL:
      "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    phone: "+987 654 321",
    email: "jack@nowhere.com"
  }

  singleContact.name => Jack Bauer
  
Loop 3 : singleConract is equal to the third object
  {
    name: "Chuck Norris",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    phone: "+918 372 574",
    email: "gmail@chucknorris.com"
  }

  singleContact.name => Chuck Norris

*/
function createCard(singleContact){
  return <Card 
    key={singleContact.id}
    name={singleContact.name}
    img={singleContact.imgURL}
    tel={singleContact.phone}
    email={singleContact.email}
  />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media.wfaa.com/assets/WFAA/images/6ccb7e54-8529-4c8f-98f8-5a9ce6592482/6ccb7e54-8529-4c8f-98f8-5a9ce6592482_1920x1080.jpg"/>
      
      {contacts.map(createCard)}
      
      {/* <Card name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
       <Card name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
