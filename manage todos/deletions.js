const router = require("express").Router();
const Todo = require("../database/model");
const {Types} = require('mongoose')

//  http://localhost:3005/todos/delete/:id
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params
    try {
        await Todo.deleteOne({_id:new Types.ObjectId(id)})
        const todoDatas = await Todo.find();
        if (todoDatas) {
            res.json({ todos: todoDatas })
        }
    } catch (err) {
        console.log(err.message)
    }
})

//   Edition existing todos
//  http://localhost:3005/todos/edit/:id
router.put('/edit/:id', async (req, res) => {
    const { id } = req.params
    try {
        const update = await Todo.updateOne({ _id: new Types.ObjectId(id) }, { $set: req.body })
        if (update) {
            const todoDatas = await Todo.find();
            res.json({todos:todoDatas})
        }
    } catch (err) {
        console.log(err.message)
    }
})

//  changing status of todo
//   http://localhost:3005/todos/status/:id
router.put('/status/:id', async (req, res) => {
    const { id } = req.params
    const { status } = req.body
    try {
        const static = await Todo.updateOne({ _id: new Types.ObjectId(id) }, { $set: { status } })
        if (static) {
            res.json({message:`Status successfully changed to ${status}`})
        }
    } catch (err) {
        console.log(err.message)
    }
})

module.exports = router