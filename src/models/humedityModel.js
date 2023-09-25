const mongoose = require("mongoose");

let now = new Date();

const humeditySchema = new mongoose.Schema({
  value: { type: Number, required: true },
  date: {
    type: Date,
    default: function () {
      now = new Date();
      now.setHours(now.getHours() - 5);
      return now;
    },
  },
});

const Humedad = mongoose.model("Humedad", humeditySchema, "humedad");

module.exports = Humedad;
