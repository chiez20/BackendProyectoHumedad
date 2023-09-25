const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
  name: String,
  lastname: String,
  email: String,
  userName: String,
  password: String,
});

const User = mongoose.model('User', userModel, 'user');
module.exports = User;
