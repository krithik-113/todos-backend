const router = require("express").Router();
const Todo = require("../database/model");

//  http://localhost:3005/todos/get
router.get("/get/:status", async (req, res) => {
  const { status } = req.params;
  try {
    if (status !== "All") {
      // filter ------------------------------
        const filtered = await Todo.find({ status });
        console.log(status, filtered);

        res.status(200).json({ todos: filtered });
      } else {
        const filtered = await Todo.find();
        console.log(filtered);

        res.status(200).json({ todos: filtered });
      }
} catch (err) {
    console.log(err.message);
  }
})

module.exports = router