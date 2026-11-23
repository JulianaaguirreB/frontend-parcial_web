# Bodegas - Frontend

Aplicación Angular con formulario de registro de bodegas y tabla de productos con precio, cantidad y bodega. Incluye componentes, modelos y servicio HTTP.

## Ejecución

Requiere Node.js 24 y npm. Desde la carpeta del proyecto:

```bash
npm install
npm start
```

Abrir `http://localhost:4200` con el backend funcionando en `http://localhost:8080`.

El formulario envía nombre y ubicación a `POST /bodegas`. La tabla obtiene los productos mediante `GET /bodegas`; una bodega nueva no aparece en ella hasta tener productos asociados.

Para compilar:

```bash
npm run build
```
