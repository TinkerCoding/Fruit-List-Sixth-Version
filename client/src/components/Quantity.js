import React, { useState } from "react";

const Quantity = ({ todo }) => {             /// the todo here is called destructuring, normally between these curly brackets we will see props.

  const [count, setCount] = useState(+todo.count);
  const [description, setDescription] = useState(todo.description);



///When using these usestate hooks, i am setting a state, and I am saying give me whatever definition at whatever is at count and description.
///Think of objects as dictionaries, objects is a word, and I am saying I want to see the defintion of count and description at whatever the definition is.



//Whenever you are stuck use console.log to figure out and backtrack where things are broken.

  function decrementCount() {
    setCount(count - 1)
    updateCount(count - 1)
  }

  function incrementCount() {
   setCount(count + 1)
   updateCount(count + 1)
 }

  // edit count function 

  const updateCount = async (newCount)  => {
  console.log ("this is the newCount", newCount)  

  try {
     const body = { description, "newCount" : newCount}
     const response = await fetch(
      `http://localhost:5000/todos/${todo.todo_id}`,
       {
         method: "PUT",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(body)
         /// you got to send data as a string, when sending data you send it as a string. 
       }
     );
    
     window.location = "/";
   } catch (err) {
     console.error(err.message);
      
   }
  }
 



 //////////////////



 
 /////////////////////
  
  


 return (
  <>
    <button onClick={() => decrementCount(count)}>-</button>
    <span>{count}</span>
    <button onClick= {() => incrementCount(count)}>+</button>
    </> 
  )
  }  

export default Quantity;
