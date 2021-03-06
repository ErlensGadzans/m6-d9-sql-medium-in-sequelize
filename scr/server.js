const express = require("express");
require("dotenv").config();
const sequelize = require("./database");

const cors = require("cors");

const server = express();

server.use(cors());
server.use(express.json());

server.get("/", (req, res, next) => {
  res.send("This port is running!");
});

const port = process.env.PORT || 3088;

db.sequelize.sync({ force: false }).then((result) => {
  server.listen(port, () => {
    console.log("This port is running on port:  " + port);
  });
});
