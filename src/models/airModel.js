const mongoose = require("mongoose");

let now = new Date();

const airSchema = new mongoose.Schema({
  value: { type: Number, required: true },
  data: {
    type: Date,
    default: function () {
      now = new Date();
      now.setHours(now.getHours() - 5);
      return now;
    },
  },
});

const Air = mongoose.model("Air", airSchema, "air");

module.exports = Air;
