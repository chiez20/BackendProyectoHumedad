const User = require('../models/userModel');
const Bcryptjs = require('bcryptjs');
const JsonWebToken = require('jsonwebtoken');
const { Config } = require('../../config');

//login user
const loginUser = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const user = await User.findOne({ userName });
    if (!user) return res.status(400).json({ message: 'User not found' });
    const isMatch = await Bcryptjs.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ message: 'Incorrect password' });

    const token = JsonWebToken.sign(
      {
        id: user._id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        userName: user.userName,
        password: user.password,
      },
      Config.secretJwtCode,
      { expiresIn: '1h' }
    );
    return res.status(200).json({ token: token });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error del servidor', error: error });
  }
};

//signup user
const createUser = async (req, res) => {
  const { name, lastname, email, userName, password } = req.body;

  try {
    const user = new User({
      name,
      lastname,
      email,
      userName,
      password: Bcryptjs.hashSync(req.body.password, 10),
    });
    await user.save();
    const token = JsonWebToken.sign(
      {
        id: user._id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        userName: user.userName,
        password: user.password,
      },
      Config.secretJwtCode
    );
    res.status(200).json({
      success: true,
      message: 'Dato ingresado',
      token: token,
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: 'failed',
      message: 'Error al ingresar al usuario',
      error: error,
    });
  }
};

module.exports.UserController = {
  createUser,
  loginUser,
};
