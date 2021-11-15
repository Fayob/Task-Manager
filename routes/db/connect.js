const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://Fabimworld:2536@nodeexpressproject.4gmtu.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("CONNECTED TO DB..."))
  .catch((err) => console.log(err));
