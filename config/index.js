require('dotenv').config();
module.exports.Config = {
  mongoUri: process.env.MONGO_URI,
  mongoPort: process.env.MONGO_PORT
  //secretJwtCode: process.env.SECRET_JWT_CODE,
};
