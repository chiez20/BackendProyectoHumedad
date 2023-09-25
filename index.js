const express = require("express");
const { Database } = require("./database/");
const { Routers } = require("./src/routes/index");
const { Socket } = require("socket.io");

const app = express();
app.use(express.json());

//MODULOS PARA SOCKET.IO
const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connection", socket => {
  console.log("Cliente conectado a Socket.io");
});

// Configuración de CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

//middlewares
Database.on("error", console.error.bind(console, "Error en la conexion"));
Database.once("open", () => {
  console.log("Conexion en la base de datos exitosa");
});

app.use("/api", Routers.router);

server.listen(8080, () => {
  console.log("Escuchando en el puerto 8080");
});
