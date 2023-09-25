//importamos el modelo
const Air = require("../models/airModel");

//creamos una nueva lectura de la calidad del aire
const crearCalidadAire = async (req, res) => {
  //optenemos los valores ingresados
  const { value, date } = req.body;

  try {
    //creamos una nueva instancia de la calidad del aire
    const aire = new Air({ value, date });

    //guardamos esos datos en la base de datos
    await aire.save();

    //enviamos una respuesta al usuario
    res.status(200).json({
      success: true,
      message: "Dato ingresado",
      data: aire,
    });
  } catch (error) {
    console.log("Error al ingresar los datos", error);
    res.status(500).json({
      success: false,
      message: "Error al momento de registrar los datos",
    });
  }
};

module.exports.AirController = {
  crearCalidadAire,
};
