const express = require("express");
const app = express();
const tasks = require("./routes/task");
const connectDB = require("./db/connect");
require("dotenv").config();
const NotFound = require("./middleware/not-found");
const asyncWrapper = require("./middleware/async");
const errorHandler = require("./middleware/error-handler");
// Middleware
app.use(express.json());
app.use(express.static("./public"));

// Routes
app.get("/hello", (req, res) => {
  res.send("Task Manager Project");
});

app.use("/api/v1/tasks", tasks);

app.use(NotFound);
app.use(errorHandler);

// app.get("/api/v1/tasks")  -- get all tasks
// app.post("/api/v1/tasks")  -- create new tasks
// app.get("/api/v1/tasks/:id")  -- get single task
// app.patch("/api/v1/tasks/:id")  -- update task
// app.delete("/api/v1/tasks/:id")  -- delete task

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
