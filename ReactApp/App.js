import React from "react";
import ReactDOM from "react-dom/client";

const num = 10; 
const Demo =() => {
    return(
   <div > 
    {/* <div id="parent" style ={{color:"red"}}>
        <div id="child">
          <h1 >Heading1</h1>
          <h2>Heading2</h2>
        </div>
      </div>  */}

       <div id="parent">
        <div id="child"style ={{color:"red"}}>
          <h1>Heading1</h1>
          <h2>Heading2</h2>
        </div>
        <div id="child-1">
          <h1>Heading1</h1>
          <h2>Heading2 {num}</h2>
        </div>
      </div> 
      </div>
    );
 };
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Demo/>);