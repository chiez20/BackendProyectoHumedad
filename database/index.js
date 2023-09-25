const mongoose = require("mongoose");
const { Config } = require("../config/index");

//establecer una conexion con la base de datos
mongoose
  .connect(Config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {})
  .catch(error => {
    console.error("Error en la conexion de la base de datos: ", error);
  });

module.exports.Database = mongoose.connection;
