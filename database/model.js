const mongoose = require('mongoose')

const createTodos = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    status: {
        type: String,
        default:"Not-Completed"
    }
})

module.exports = mongoose.model("todos",createTodos)