// routes/contenedores.js

const express = require('express');
const router = express.Router();
const contenedorController = require('../controllers/contenedor.controller');

// Ruta para obtener todos los contenedores
router.get('/', contenedorController.obtenerContenedores);

// Ruta para obtener un contenedor por su ID
router.get('/:id', contenedorController.obtenerContenedorPorId);

// Ruta para crear un nuevo contenedor
router.post('/', contenedorController.crearContenedor);

// Ruta para actualizar un contenedor existente
router.put('/:id', contenedorController.actualizarContenedor);

// Ruta para eliminar un contenedor
router.delete('/:id', contenedorController.eliminarContenedor);

module.exports = router;
