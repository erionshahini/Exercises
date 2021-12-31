import React from "react";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2>Jim Carrey</h2>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVl6f7CWwdVCgb_bEHUT9ZuoY8wz50EET_dw&usqp=CAU"
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p>+123 456 789</p>
          <p>j@carrey.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
