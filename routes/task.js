const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createNewTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("./controller");

router.get("/", getAllTasks);

router.post("/", createNewTask);

router.get("/:name", getSingleTask);

router.patch("/:id", updateTask);

router.delete("/:id", deleteTask);

module.exports = router;
