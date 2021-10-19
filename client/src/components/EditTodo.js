import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
    const [description, setDescription] = useState(todo.description);
    const [count, setCount] = useState(+todo.count);
    //edit description function

    const updateDescription = async e => {
      e.preventDefault();
      try {
        const newBody = {
          flag : true,
          description : description, 
        }
        const response = await fetch(
          `http://localhost:5000/todos/${todo.todo_id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newBody)
          }
        );

        window.location = "/";
      } catch (err) {
        console.error(err.message);
      }
    };

    return (
    <Fragment>
       <button 
         type="button" 
         class="btn btn-warning" 
         data-toggle="modal" 
         data-target={`#id${todo.todo_id}`}
        >
      Edit
    </button>

    {/*
     id = id10
    */}
   <div 
    class="modal" 
    id={`id${todo.todo_id}`}
    onClick={() => setDescription(todo.description)}
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Edit Todo</h4>
            <button 
            type="button" 
            class="close" 
            data-dismiss="modal"
            onClick={() => setDescription(todo.description)}
            >
             &times;
          </button>
        </div>
         
         <div class="modal-body">
          <input 
             type="text" 
             className="form-control" 
             value={description} 
             onChange={e => setDescription(e.target.value)} 
             />
           </div>
    
        <div class="modal-footer">
            <button 
            type="button" 
            class="btn btn-warning" 
            data-dismiss="modal"
            onClick={e => updateDescription(e)}
        >
           Edit
            </button>
            <button 
              type="button" 
              class="btn btn-danger" 
              data-dismiss="modal"
              onClick={() => setDescription(todo.description)}
              >
                close
              </button>
            </div>
          </div>
         </div>
       </div>
     </Fragment>
   );
 };

export default EditTodo;