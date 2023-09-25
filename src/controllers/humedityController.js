//importamos el modelo
const Humedad = require("../models/humedityModel");

//creamos una nueva humedad:
const crearHumedad = async (req, res) => {
  //obtenemos los valores que son ingresados por medio del json
  const { value, date } = req.body;

  try {
    //creamos una nueva instanca con los datos recibidos del json
    const humedad = new Humedad({ value, date });

    //guardamos esos datos en la base de datos
    await humedad.save();

    //enviamos una respuesta al usuario
    res.status(200).json({
      success: true,
      message: "Se almacenaron los datos!",
      data: humedad,
    });
  } catch (error) {
    console.error("Error al registrar los datos:", error);
    res.status(500).json({
      success: false,
      message: "Error al momento de registrar los datos",
    });
  }
};

module.exports.HumeController = {
  crearHumedad,
};
