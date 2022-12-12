const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Router = require("./routes");
const cors = require("cors");

const connectionString =
  "mongodb+srv://kshitiz:kshitiz301201@cluster0.aw296ue.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connectionString, { useNewUrlParser: true });

mongoose.connection.on("error", function (error) {
  console.log(error);
});

mongoose.connection.on("open", function () {
  console.log("Connected to MongoDB database.");
});

const app = express();
const port = process.env.port || 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(Router);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
