const router = require('express').Router()
const Todo = require('../database/model')

//  http://localhost:3005/todos/create
router.post('/create', async (req, res) => {
    const createTodo = new Todo(req.body);
    try {
        const success = await Todo.create(createTodo)
        if (success) {
            res.json({message:"Successfully Created"})
        }
    } catch (err) {
        console.log(err.message)
    }
    
})

module.exports = router