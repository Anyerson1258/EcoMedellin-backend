// models/Contenedor.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Comuna = require('./Comuna');

const Contenedor = sequelize.define('Contenedor', {
  id_contenedor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_comuna: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Comuna,
      key: 'id_comuna'
    }
  },
  ubicacion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo: {
    type: DataTypes.ENUM('orgánico', 'reciclable', 'general'),
    allowNull: false
  },
  estado: {
    type: DataTypes.ENUM('lleno', 'parcialmente lleno', 'vacío'),
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'contenedores' // Nombre de la tabla en la base de datos
});

module.exports = Contenedor;
