const router = require("express").Router();
const Todo = require("../database/model");

//  http://localhost:3005/todos/get
router.get('/get', async (req, res) => {
    try {
        const todos = await Todo.find()
        if (todos.length) {
            res.json({todos})
        } else {
            res.json({todos:[]})
        }
    } catch (err) {
        console.log(err.message)
    }
})
 //   http://localhost:3005/todos/status/:status
router.get('/status/:status', async (req, res) => {
    const { status } = req.params
    try {
        if (status !== "All") {
            const todo = await Todo.find({ status });
            console.log(todo)
           res.json({todo}) 
        } else {
            const todo = await Todo.find()
            console.log(todo);
            res.json({todo})
        }
    } catch (err) {
        console.log(err.message)
    }
})

module.exports = router