// models/Alerta.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Contenedor = require('./Contenedor');

const Alerta = sequelize.define('Alerta', {
  id_alerta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_contenedor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Contenedor,
      key: 'id_contenedor'
    }
  },
  fecha_alerta: {
    type: DataTypes.DATE,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  estado: {
    type: DataTypes.ENUM('pendiente', 'resuelto'),
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'alertas' // Nombre de la tabla en la base de datos
});

module.exports = Alerta;
