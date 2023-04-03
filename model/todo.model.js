const moogose = require("mongoose");

const TodoSchema = new moogose.Schema({
  title: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
});

const TodoModel = moogose.model("Todo", TodoSchema);

module.exports = TodoModel;
