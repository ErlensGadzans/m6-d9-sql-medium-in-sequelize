const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Author = sequelize.define(Author, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Author;
