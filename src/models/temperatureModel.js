const mongoose = require("mongoose"); //importamos mongoose para crear los modelos

let now = new Date();

const temperatureSchema = mongoose.Schema({
  //definimos el esquema de los datos
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

//creamos el modelo a partir del esquema establecido
const Temperatura = mongoose.model(
  "Temperatura",
  temperatureSchema,
  "temperatura"
);
module.exports = Temperatura;
