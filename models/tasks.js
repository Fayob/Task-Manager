const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must be Provided"],
    trim: true,
    maxlength: [20, "maximum name of 20 character"],
  },
  completed: {
    type: String,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);