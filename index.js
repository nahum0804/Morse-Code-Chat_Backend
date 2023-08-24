const fs = require('fs');

// Ruta al archivo de texto que deseas monitorear
const rutaArchivo = 'archivo.txt';

// Función para leer y mostrar el contenido del archivo
const mostrarContenido = () => {
  fs.readFile(rutaArchivo, 'utf-8', (error, contenido) => {
    if (error) {
      console.error('Error al leer el archivo:', error);
      return;
    }

    console.log('Contenido del archivo:');
    console.log(contenido);
  });
};

// Mostrar el contenido inicial
mostrarContenido();

// Observar cambios en el archivo
fs.watchFile(rutaArchivo, (curr, prev) => {
  if (curr.mtime > prev.mtime) {
    console.log('Archivo modificado, mostrando contenido nuevamente...');
    mostrarContenido();
  }
});

console.log('Observando cambios en el archivo...');