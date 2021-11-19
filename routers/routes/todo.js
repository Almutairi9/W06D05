const express = require("express");
const { createTodo , getOnetodo} = require("./../controller/todos");

const todosRouter = express.Router();

todosRouter.post("/create", createTodo);
todosRouter.get("/show", getOnetodo);
// todosRouter.delete("/delete", deleteTodo);

module.exports = todosRouter;
