import React, { useState, Fragment } from "react";
import './App.css';
//components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import TotalQuantity from "./components/TotalQuantity";


function App() {
  const [totalCount, setTotalCount] = useState(0);
  return (
    <Fragment>
      <div className="container">
       <TotalQuantity totalCount={totalCount}/>  ///This is how you pass down a value without importing or exporting
       <InputTodo />
       <ListTodos  setTotalCount={setTotalCount}/>
       </div>
    </Fragment>
  
  );
}

export default App;


////////// The best place to hold the component count is in app.js as your passing it down.

///You can import/export components, but you cannot import/export variables (this is specific to react)(react props)