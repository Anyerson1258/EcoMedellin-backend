const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const dbConfig = {
  host: 'localhost', // Dirección del servidor MySQL
  user: 'root',      // Usuario de la base de datos
  password: '',      // Contraseña de la base de datos
  database: 'ecomedellin' // Nombre de la base de datos
};

// Crear la conexión a la base de datos
const connection = mysql.createConnection(dbConfig);

// Conectar a la base de datos
connection.connect(error => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL.');
});

module.exports = connection;
