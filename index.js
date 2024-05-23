// index.js

// Importamos las dependencias necesarias
const express = require('express');
const dotenv = require('dotenv');

// Configuramos las variables de entorno
dotenv.config();

// Creamos una instancia de Express
const app = express();
const PORT = process.env.PORT || 3000; // Puerto del servidor

// Configuramos el middleware para el manejo de datos JSON
app.use(express.json());

// Configuramos las rutas de la API
const userRoutes = require('./routes/userRoutes');
const containerRoutes = require('./routes/containerRoutes');
const collectionRoutes = require('./routes/collectionRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/users', userRoutes);
app.use('/api/containers', containerRoutes);
app.use('/api/collections', collectionRoutes);
app.use('/api/auth', authRoutes);

// Manejador de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
