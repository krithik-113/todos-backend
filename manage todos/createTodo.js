const router = require('express').Router()
const Todo = require('../database/model')

//  http://localhost:3005/todos/create
router.post('/create', async (req, res) => {
    const createTodo = new Todo(req.body);
    try {
        const success = await Todo.create(createTodo)
        const todos = await Todo.find()
        console.log(todos)
        if (success) {
            res.json({message:todos})
        }
    } catch (err) {
        console.log(err.message)
    }
    
})

module.exports = router