require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

const MONGODB_URI = process.env.DB_URL;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log(`Connecting with mongoose on port ${port}`);
    app.listen(port);
  })
  .catch((err) => console.log(err));
