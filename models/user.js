const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  payment: Number,
  batch: { type: mongoose.Schema.Types.ObjectId, ref: "batches" },
  registeredOn: { type: Date, default: Date.now },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
