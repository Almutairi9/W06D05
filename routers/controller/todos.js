const todosModel = require("../../db/models/todosSchema");

const createTodo = (req, res) => {
  const { task } = req.body;

  const newTodo = new todosModel({
    task,
  });

  newTodo
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getOnetodo = (req, res) => {
  const { getOnetodo } = req.body;

  todosModel
    .findOne({ task: getOnetodo })
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const deleteTodo = (req, res) => {
    const { task } = req.body;
    todosModel.deleteOne({
        task: task
      },(err) => {
          if (err)
          return handleError(err);
      });
      todosModel.find({}).then((result) =>{
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
    };

module.exports = { createTodo , getOnetodo , deleteTodo};
