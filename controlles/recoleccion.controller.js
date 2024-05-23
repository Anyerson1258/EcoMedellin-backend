// controllers/recoleccion.controller.js

const Recoleccion = require('../models/Recoleccion');

// Obtener todas las recolecciones
exports.obtenerRecolecciones = async (req, res) => {
  try {
    const recolecciones = await Recoleccion.findAll();
    res.json(recolecciones);
  } catch (error) {
    res.status(500).json({ mensaje: 'Ocurrió un error al obtener las recolecciones.' });
  }
};

// Obtener una recolección por su ID
exports.obtenerRecoleccionPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const recoleccion = await Recoleccion.findByPk(id);
    if (!recoleccion) {
      return res.status(404).json({ mensaje: 'Recolección no encontrada.' });
    }
    res.json(recoleccion);
  } catch (error) {
    res.status(500).json({ mensaje: 'Ocurrió un error al obtener la recolección.' });
  }
};

// Crear una nueva recolección
exports.crearRecoleccion = async (req, res) => {
  const { id_contenedor, id_usuario, fecha, cantidad_kilos } = req.body;
  try {
    const nuevaRecoleccion = await Recoleccion.create({ id_contenedor, id_usuario, fecha, cantidad_kilos });
    res.status(201).json(nuevaRecoleccion);
  } catch (error) {
    res.status(500).json({ mensaje: 'Ocurrió un error al crear la recolección.' });
  }
};

// Actualizar una recolección existente
exports.actualizarRecoleccion = async (req, res) => {
  const { id } = req.params;
  const { id_contenedor, id_usuario, fecha, cantidad_kilos } = req.body;
  try {
    const recoleccion = await Recoleccion.findByPk(id);
    if (!recoleccion) {
      return res.status(404).json({ mensaje: 'Recolección no encontrada.' });
    }
    recoleccion.id_contenedor = id_contenedor;
    recoleccion.id_usuario = id_usuario;
    recoleccion.fecha = fecha;
    recoleccion.cantidad_kilos = cantidad_kilos;
    await recoleccion.save();
    res.json(recoleccion);
  } catch (error) {
    res.status(500).json({ mensaje: 'Ocurrió un error al actualizar la recolección.' });
  }
};

// Eliminar una recolección
exports.eliminarRecoleccion = async (req, res) => {
  const { id } = req.params;
  try {
    const recoleccion = await Recoleccion.findByPk(id);
    if (!recoleccion) {
      return res.status(404).json({ mensaje: 'Recolección no encontrada.' });
    }
    await recoleccion.destroy();
    res.json({ mensaje: 'Recolección eliminada correctamente.' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Ocurrió un error al eliminar la recolección.' });
  }
};
