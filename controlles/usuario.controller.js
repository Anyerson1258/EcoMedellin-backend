// controllers/usuario.controller.js

const Usuario = require('../models/Usuario');

// Obtener todos los usuarios
exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: 'Ocurrió un error al obtener los usuarios.' });
  }
};

// Obtener un usuario por su ID
exports.obtenerUsuarioPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado.' });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ mensaje: 'Ocurrió un error al obtener el usuario.' });
  }
};

// Crear un nuevo usuario
exports.crearUsuario = async (req, res) => {
  const { nombre, apellido, correo, contrasena, rol } = req.body;
  try {
    const nuevoUsuario = await Usuario.create({ nombre, apellido, correo, contrasena, rol });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ mensaje: 'Ocurrió un error al crear el usuario.' });
  }
};

// Actualizar un usuario existente
exports.actualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, correo, contrasena, rol } = req.body;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado.' });
    }
    usuario.nombre = nombre;
    usuario.apellido = apellido;
    usuario.correo = correo;
    usuario.contrasena = contrasena;
    usuario.rol = rol;
    await usuario.save();
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ mensaje: 'Ocurrió un error al actualizar el usuario.' });
  }
};

// Eliminar un usuario
exports.eliminarUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado.' });
    }
    await usuario.destroy();
    res.json({ mensaje: 'Usuario eliminado correctamente.' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Ocurrió un error al eliminar el usuario.' });
  }
};
