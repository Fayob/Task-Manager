const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  uname: {
    type: String,
    required: [true, "Must be Provided"],
    trim: true,
    maxlength: [20, "maximum name of 20 character"],
  },
  psw: {
    type: String,
    required: [true, "input your password"],
    minlength: [4, "password too short"],
  },
});

module.exports = mongoose.model("Task", TaskSchema);
