// models/Comuna.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Comuna = sequelize.define('Comuna', {
  id_comuna: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'comunas' // Nombre de la tabla en la base de datos
});

module.exports = Comuna;
