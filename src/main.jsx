import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from "./Components/App";
import { RouterProvider } from "react-router-dom";
import "./index.css"


//============================================================================================================================

// const headingDiv = React.createElement('div',{ id:"div", style:{color:"red", border:"5px solid black", background:"blue"}},[

//         React.createElement('h1',{ id:"heading"},"Iam heading inside headingDiv"),
//         React.createElement('h2',{ id:"Second_heading"},"Iam seconf heading")

// ]); 


// this can be also be written as:-

// const headingDiv = <div>
//   <h1 style={{color: "red", background: "blue"}} id="Hi22">This is firstHeading</h1>
//   </div> 

// both that mean's React.createElement and jsx returns same object

 

  




 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter} />); // this is will not append in root div it will replace stuff inside the div