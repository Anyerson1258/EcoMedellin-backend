// routes/recolecciones.js

const express = require('express');
const router = express.Router();
const Recoleccion = require('../models/Recoleccion');

// Ruta para obtener todas las recolecciones
router.get('/', async (req, res) => {
  try {
    const recolecciones = await Recoleccion.findAll();
    res.json(recolecciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las recolecciones' });
  }
});

// Ruta para crear una nueva recolección
router.post('/', async (req, res) => {
  const { id_contenedor, id_usuario, fecha, cantidad_kilos } = req.body;
  try {
    const nuevaRecoleccion = await Recoleccion.create({ id_contenedor, id_usuario, fecha, cantidad_kilos });
    res.status(201).json(nuevaRecoleccion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la nueva recolección' });
  }
});

// Ruta para actualizar una recolección existente
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { id_contenedor, id_usuario, fecha, cantidad_kilos } = req.body;
  try {
    const recoleccionActualizada = await Recoleccion.update({ id_contenedor, id_usuario, fecha, cantidad_kilos }, {
      where: { id_recoleccion: id }
    });
    res.json(recoleccionActualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la recolección' });
  }
});

// Ruta para eliminar una recolección existente
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Recoleccion.destroy({ where: { id_recoleccion: id } });
    res.json({ message: 'Recolección eliminada exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar la recolección' });
  }
});

module.exports = router;
