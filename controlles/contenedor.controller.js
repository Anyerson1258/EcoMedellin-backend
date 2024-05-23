// controllers/contenedor.controller.js

const Contenedor = require('../models/Contenedor');

// Obtener todos los contenedores
exports.obtenerContenedores = async (req, res) => {
  try {
    const contenedores = await Contenedor.findAll();
    res.json(contenedores);
  } catch (error) {
    res.status(500).json({ mensaje: 'Ocurrió un error al obtener los contenedores.' });
  }
};

// Obtener un contenedor por su ID
exports.obtenerContenedorPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const contenedor = await Contenedor.findByPk(id);
    if (!contenedor) {
      return res.status(404).json({ mensaje: 'Contenedor no encontrado.' });
    }
    res.json(contenedor);
  } catch (error) {
    res.status(500).json({ mensaje: 'Ocurrió un error al obtener el contenedor.' });
  }
};

// Crear un nuevo contenedor
exports.crearContenedor = async (req, res) => {
  const { id_comuna, ubicacion, tipo, estado } = req.body;
  try {
    const nuevoContenedor = await Contenedor.create({ id_comuna, ubicacion, tipo, estado });
    res.status(201).json(nuevoContenedor);
  } catch (error) {
    res.status(500).json({ mensaje: 'Ocurrió un error al crear el contenedor.' });
  }
};

// Actualizar un contenedor existente
exports.actualizarContenedor = async (req, res) => {
  const { id } = req.params;
  const { id_comuna, ubicacion, tipo, estado } = req.body;
  try {
    const contenedor = await Contenedor.findByPk(id);
    if (!contenedor) {
      return res.status(404).json({ mensaje: 'Contenedor no encontrado.' });
    }
    contenedor.id_comuna = id_comuna;
    contenedor.ubicacion = ubicacion;
    contenedor.tipo = tipo;
    contenedor.estado = estado;
    await contenedor.save();
    res.json(contenedor);
  } catch (error) {
    res.status(500).json({ mensaje: 'Ocurrió un error al actualizar el contenedor.' });
  }
};

// Eliminar un contenedor
exports.eliminarContenedor = async (req, res) => {
  const { id } = req.params;
  try {
    const contenedor = await Contenedor.findByPk(id);
    if (!contenedor) {
      return res.status(404).json({ mensaje: 'Contenedor no encontrado.' });
    }
    await contenedor.destroy();
    res.json({ mensaje: 'Contenedor eliminado correctamente.' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Ocurrió un error al eliminar el contenedor.' });
  }
};
