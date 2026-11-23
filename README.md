Frontend de bodegas y productos.

Aplicacion desarrollada con Angular. Incluye componentes para el formulario y la tabla, modelos de Bodega y Producto, y un servicio HTTP para comunicarse con el backend.

Para ejecutarla se necesita Node.js 24 y npm. Abrir una terminal en la carpeta del proyecto y ejecutar: npm install

Cuando termine la instalacion, ejecutar: npm start

Abrir http://localhost:4200 en el navegador. El backend debe estar funcionando por separado en http://localhost:8080

El formulario permite registrar bodegas ingresando nombre y ubicacion. Ambos campos son obligatorios. Los datos se envian a POST /bodegas y se muestra un mensaje con el resultado del registro.

La tabla muestra el nombre del producto, precio, cantidad y bodega correspondiente. La informacion se obtiene de GET /bodegas, incluyendo los productos asociados a cada bodega. Los productos no estan escritos como datos fijos en el frontend.

Una bodega nueva no aparece en la tabla de productos mientras no tenga productos asociados. Los productos de ejemplo se cargan desde el backend. No hay formulario para crear productos ni opciones para editar, eliminar o iniciar sesion.

Para generar la compilacion de produccion, ejecutar: npm run build
