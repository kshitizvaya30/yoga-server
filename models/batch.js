const mongoose = require("mongoose");

const BatchSchema = new mongoose.Schema({
  timings: {
    type: String,
    required: true,
  },
});

const Batch = mongoose.model("Batch", BatchSchema);
module.exports = Batch;
