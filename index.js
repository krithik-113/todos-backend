const express = require('express')
const app = express()
const cors = require('cors')
const mongoose  = require('mongoose')

app.use(cors())
app.use(express.json())

app.use('/todos', require('./manage todos/createTodo'))
app.use('/todos', require('./manage todos/getTodos'))
app.use('/todos',require('./manage todos/deletions'))

async function MongoDB_Connection() {
    await mongoose.connect(
      "mongodb+srv://krithik-0113:cFW3QeW6xk0WupR0@cluster0.y8z4nih.mongodb.net/To-doLists?retryWrites=true&w=majority&appName=Cluster0");
    console.log('Database Connected Successfully')
}

app.listen(3005, () => {
    console.log('Server is running on port http://localhost:3005/')
    MongoDB_Connection().catch(err=>console.log(err.message))
})