// models/Recoleccion.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Contenedor = require('./Contenedor');
const Usuario = require('./Usuario');

const Recoleccion = sequelize.define('Recoleccion', {
  id_recoleccion: {
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
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,
      key: 'id_usuario'
    }
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  cantidad_kilos: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'recoleccion' // Nombre de la tabla en la base de datos
});

module.exports = Recoleccion;
