const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
app.use(express.json());

const morgan = require("morgan");
app.use(morgan("dev"));
const db = require("./db/db.js");

const userRouter = require("./routers/routes/user");
app.use("/users", userRouter);

const todosRouter = require("./routers/routes/todo");
app.use("/todo", todosRouter);

const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
