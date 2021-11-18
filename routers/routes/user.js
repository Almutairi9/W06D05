const express = require("express");
const { createUser, getOneuser } = require("./../controller/users");

const userRouter = express.Router();

userRouter.post("/create", createUser);
// userRputer.get("/get", getAllusers)
userRouter.get("/show", getOneuser);

module.exports = userRouter;
