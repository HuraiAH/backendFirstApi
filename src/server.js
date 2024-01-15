//module
require("dotenv").config();
const express = require("express");
// import { express } from "express";
const app = express();
const morgan = require("morgan");
const contactRoute = require("./router");
const mongoose = require("mongoose");
//port number
let port = process.env.PORT || 4000;
//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// server
let uri = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASS}@cluster0.xadkal8.mongodb.net/usersMangement?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => {
    app.use(contactRoute);
    app.listen(port, () => {
      console.log("Connected to the database ok");
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(`${err.massage} database note connect!`);
  });
