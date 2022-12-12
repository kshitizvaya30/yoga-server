const express = require("express");
const Batch = require("./models/batch");
const User = require("./models/user");

const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.get("/get-batches", (req, res) => {
  Batch.find((err, result) => {
    if (err) res.send("Some error occured");
    res.send(result);
  });
});

app.post("/user-details", (req, res) => {
  const formData = req.body;
  let user = new User(formData);
  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();

  User.findOne({ email: user.email }, (err, doc) => {
    if (err) res.send("Some error occured");
    console.log(doc);
    if (
      !doc ||
      (currentMonth !== user.registeredOn.getMonth() &&
        currentYear !== user.registeredOn.getFullYear())
    ) {
      user.save((err, result) => {
        if (err) res.send("Some error occured");
        res.send(result);
      });
    } else {
      res.status(401).send("Registeration is already done for current month");
    }
  });
});

module.exports = app;
