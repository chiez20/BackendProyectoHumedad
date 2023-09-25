const Temperatura = require("../models/temperatureModel"); //importamos el modelo

//crear nueva temperatura (post)
const crearTemperatura = async (req, res) => {
  //extraemos los datos que se ingresan mediante el json
  const { value, date } = req.body;

  try {
    //se crea una nueva instancia con los datos recibidos
    const temperatura = new Temperatura({ value, date });

    //guaramos los datos en la base de datos
    await temperatura.save();
    //enviamos una respuesta para avisar que los datos si fueron guarados correctamente

    res
      .status(201)
      .json({ success: true, message: "Datos ingresados", data: temperatura });
  } catch (error) {
    console.error("Error al registrar la temperatura", error);
    res
      .status(500)
      .json({ success: false, message: "Error en el ingreso de los datos" });
  }
};

module.exports.TempController = {
  crearTemperatura,
};