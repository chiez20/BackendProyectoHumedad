const express = require('express');
const { TempController } = require('../controllers/temperatureController');
const TemperaturaModel = require('../models/temperatureModel');
const { HumeController } = require('../controllers/humedityController');
const HumedadModel = require('../models/humedityModel');
const { AirController } = require('../controllers/AireController');
const AirModel = require('../models/airModel');
const { UserController } = require('../controllers/userController');
const UserModel = require('../models/userModel');

const router = express.Router();

//Login users
router.post('/users/login', UserController.loginUser);

//USUARIOS
router.post('/users/signup', UserController.createUser);

//CALIDAD DEL AIRE
router.post('/aire', AirController.crearCalidadAire);

router.get('/aire', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  AirModel.find({})
    .then((aire) => {
      res.json(aire);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: 'Error al obtener los datos',
        error: error,
      });
    });
});

//TEMPERATURA
router.post('/temperatura', TempController.crearTemperatura);

router.get('/temperatura', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  TemperaturaModel.find({})
    .then((temperaturas) => {
      res.json(temperaturas);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: 'Error al obtener los datos' });
    });
});

//HUMEDAD
router.post('/humedad', HumeController.crearHumedad);

router.get('/humedad', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  HumedadModel.find({})
    .then((temperaturas) => {
      res.json(temperaturas);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: 'Error al obtener los datos' });
    });
});

module.exports.Routers = {
  router,
};
