require("./routes/db/connect");
const express = require("express");
const app = express();

const tasks = require("./routes/task");

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Task Manager Project");
});

app.use("/api/v1/tasks", tasks);

// app.get("/api/v1/tasks")  -- get all tasks
// app.post("/api/v1/tasks")  -- create new tasks
// app.get("/api/v1/tasks/:id")  -- get single task
// app.patch("/api/v1/tasks/:id")  -- update task
// app.delete("/api/v1/tasks/:id")  -- delete task

const port = 3000;
app.listen(port, console.log(`Listening on port ${port}...`));
