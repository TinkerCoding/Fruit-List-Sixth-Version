const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json()); //req.body

//Routes//


/////////Routes for Description/////////
//create a todo

app.post("/todos", async (req, res) => {
    try {
        const { description, count } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description, count) VALUES($1, $2) RETURNING *",
            [description, count]
        );

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//get all todos

app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a todo

app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
            id
        ]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//update a todo


app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const { newCount } = req.body;
        const { flag }  = req.body;

//// Look into destructering objects

        console.log ("this is the id", id) 
        console.log ("this is the description", description) 
        console.log ("this is the newCount", newCount) 
        console.log ("this is to find out if a flag is true", flag )

        if (flag === true) {
            const updateTodo = await pool.query(
                "UPDATE todo SET description = $1 WHERE todo_id = $2",
                [description,  id]
            );
        } else {
            const updateTodo = await pool.query(
                "UPDATE todo SET description = $1, count = $2 WHERE todo_id = $3",
                [description, newCount, id]
            );
        }
    
        res.json("Todo was updated!");
    } catch (err) {
        console.error(err.message);
}
});


//delete a todo

app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
            id
        ]);
        res.json("Todo was deleted!");
    } catch (err) {
        console.log(err.message);
    }
});

app.listen(5000, () => {
    console.log("server has started on port 5000");
});





///update increment///



///update decrement///