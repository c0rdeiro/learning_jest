const TodoModel = require("../model/todo.model");

const createTodo = async (req, res, next) => {
  try {
    const createdModel = await TodoModel.create(req.body);

    res.status(201).json(createdModel);
  } catch (err) {
    next(err);
  }
};

const getTodos = async (req, res, next) => {
  try {
    const allTodos = await TodoModel.find({});
    res.status(200).json(allTodos);
  } catch (err) {
    next(err);
  }
};

const getTodoById = async (req, res, next) => {
  try {
    const todo = await TodoModel.findById(req.params.todoId);
    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    next(error);
  }
};

const updateTodo = async (req, res, next) => {
  try {
    const todo = await TodoModel.findByIdAndUpdate(
      req.params.todoId,
      req.body,
      {
        new: true,
        useFindAndModify: false,
      }
    );
    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(404).send();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { createTodo, getTodos, getTodoById, updateTodo };
