// routes/recolecciones.js

const express = require('express');
const router = express.Router();
const recoleccionController = require('../controllers/recoleccion.controller');

// Ruta para obtener todas las recolecciones
router.get('/', recoleccionController.obtenerRecolecciones);

// Ruta para obtener una recolección por su ID
router.get('/:id', recoleccionController.obtenerRecoleccionPorId);

// Ruta para crear una nueva recolección
router.post('/', recoleccionController.crearRecoleccion);

// Ruta para actualizar una recolección existente
router.put('/:id', recoleccionController.actualizarRecoleccion);

// Ruta para eliminar una recolección
router.delete('/:id', recoleccionController.eliminarRecoleccion);

module.exports = router;
