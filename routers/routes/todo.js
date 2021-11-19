const express = require("express");
const {
  createTodo,
  getOnetodo,
  deleteTodo,
  updateTodo,
} = require("./../controller/todos");

const todosRouter = express.Router();

todosRouter.post("/create", createTodo);
todosRouter.get("/show", getOnetodo);
todosRouter.delete("/delete", deleteTodo);
todosRouter.put("/update", updateTodo);

module.exports = todosRouter;
