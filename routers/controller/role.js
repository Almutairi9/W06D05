const userModel = require("../../db/moduls/userSchema");

const createRole = (req, res) => {
  const { tyoeOfUser, Permissions } = req.body;

  const newUser = new rolerModel({
    tyoeOfUser,
    Permissions,
  });

  newUser
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { createRole };
