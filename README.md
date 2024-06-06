# Quiosco de Alimentos

## Descripción del Proyecto

Este proyecto es un sistema de kiosco de alimentos que permite a los clientes realizar pedidos, a la cocina recibir y procesar esos pedidos, y a la ventanilla administrar las órdenes listas para su entrega. El proyecto utiliza Next.js, un framework de React, y Prisma como ORM para la gestión de la base de datos.

## Funcionalidades

- Ver categorías de alimentos.
- Ver productos dentro de cada categoría.
- Agregar productos al carrito.
- Modificar cantidad de productos en el carrito.
- Realizar pedido.
- Recibir pedidos en la cocina.
- Marcar pedidos como completados.
- Ver órdenes listas en la ventanilla.
- Marcar órdenes como entregadas.

## Historial de Cambios

### Versión 1.0.0 - 21 de Mayo, 2024

- **Creación del Proyecto**

  - Configuración inicial del proyecto con las rutas principales.
  - Conexión con la base de datos PostgreSQL alojada en Render.
  - Creación de los modelos de la base de datos.
  - Instalación de la dependencia `ts-node` con el comando **`npm i -D ts-node`**.
    **`npm i @prisma/client` `npm i -D prisma`**
  - Creación de archivos para la inserción de datos proporcionados en el curso.
  - Carga de información en la base de datos de Render con el comando **`npx prisma db seed`**.

- **Feature: Ver categorías de alimentos**
  - Consumo de la información en el proyecto.
  - Implementación de la funcionalidad que permite a los clientes ver las diferentes categorías de alimentos disponibles en el quiosco.
  - Implementación de una vista con íconos para una mejor visualización por parte de los clientes.
  - Desarrollo de las rutas necesarias para que los usuarios puedan navegar entre las diferentes categorías utilizando el menú de navegación.

### Versión 1.1.0 - 21 de Mayo, 2024

- **Feature: Ver productos dentro de cada categoría**
  - Implementación de la funcionalidad que permite a los clientes ver los productos disponibles dentro de una categoría seleccionada.
  - Diseño y formato del precio y estilo para los productos (incluyendo nombre y precio).
  - Adición y renderización de imágenes para mejorar la visualización por parte de los usuarios.
  - Incorporación de un botón de "Agregar al carrito" con estilo, sin funcionalidad activa.
  - Adición de un título que invita al usuario a seleccionar su pedido.
  - Aplicación de estilo al menú de navegación (Nav) para indicar la categoría que se está visualizando.

### Versión 1.2.0 - 22 de Mayo, 2024

- **Feature: Agregar productos al carrito**
  - Instalación de la herramienta `zustand` para la gestión del estado con el comando **`npm i zustand`**.
  - Modificación del apartado del carrito para manejar adecuadamente cuando este se encuentra vacío.
  - Instalación de la librería de íconos `@heroicons/react` con el comando **`npm i @heroicons/react`**.
  - Implementación de la funcionalidad que permite a los clientes agregar productos seleccionados al carrito de compras.
  - Mejora de la visualización del carrito para que los usuarios comprendan mejor su contenido.

### Versión 1.3.0 - 23 de Mayo, 2024

- **Feature: Modificar cantidad de productos en el carrito**
  - Implementada la funcionalidad que evita la duplicación de productos en el carrito.
  - Implementada la capacidad para que los clientes puedan modificar la cantidad de cada producto en el carrito, con un rango de 1 a 5 unidades por producto.
  - Añadida la funcionalidad para que los clientes puedan eliminar productos del carrito.
  - Mejora visual y funcional para mostrar el total de productos en el carrito, proporcionando una mejor experiencia de usuario.

### Versión 1.4.0 - 24 de Mayo, 2024

- **Feature: Realizar pedido**
  - Creación de dos módulos para guardar pedidos en la base de datos (`order` y `product`), seguida de la migración a la base de datos con **`npx prisma migrate dev`**.
  - Implementación de un botón para confirmar el pedido desde la sección "Mis pedidos".
  - Adición de un campo para el nombre del cliente que realiza el pedido.
  - Instalación de la librería de validación **`npm i zod`**.
  - Implementación de validaciones para el nombre del cliente utilizando `zod`.
  - Instalación de la librería **`npm i react-toastify`** para notificaciones.
  - Adición de mensajes de error indicando la necesidad de ingresar el nombre del cliente para proceder con el pedido.
  - Implementación de la funcionalidad que permite a los clientes finalizar el pedido y enviarlo a la cocina.
  - Adición de mensajes de verificación para notificar a los usuarios que el pedido se ha realizado correctamente.
  - Implementación de la limpieza de la pantalla de pedido una vez que el pedido se ha realizado exitosamente.

### Versión 1.5.0 - 27 de Mayo, 2024

- **Feature: Recibir pedidos**
  - Creación de las carpetas correspondientes para el módulo de administración.
  - Adición del logo del quiosco como un componente reutilizable.
  - Creación de rutas y vistas para el administrador, incluyendo secciones de órdenes y productos.
  - Implementación del menú de navegación para el administrador.
  - Desarrollo de la interfaz visual para la recepción de nuevas órdenes.

### Versión 1.6.0 - 29 de Mayo, 2024

- **Feature: Marcar pedidos como completados y Funcionalidad de Añadir y Editar Productos**
  - Implementada la funcionalidad que permite a la cocina marcar los pedidos como completados una vez que estén listos.
  - Implementación de re-fetching en las órdenes para que las completadas ya no aparezcan en la lista.
  - En la sección de administración, en Productos, se pueden ver todos los productos de la base de datos.
  - Implementación de un paginador para la lista de productos.
  - Adición de un buscador para los productos.
  - Creación de un formulario en una nueva ventana para agregar más productos.
  - Instalación de `cloudinary` para gestionar imágenes al añadir un producto con **`npm i cloudinary`**.
  - Instalación de `react-icons` para íconos adicionales con **`npm i react-icons`**.
  - Adición de funcionalidad en el formulario para previsualizar la imagen que se va a subir.
  - Implementación de la funcionalidad para registrar productos nuevos con su imagen.
  - Implementación de la función para actualizar órdenes cuando el cliente las envía, con actualización en tiempo real y manual en la sección de administración.
  - Instalación de `swr` para manejo de datos en tiempo real con **`npm i swr`**.

### Versión 1.7.0 - 02 de Junio, 2024

- **Feature: Ver órdenes listas**
  - Implementada la funcionalidad que permite a la ventanilla ver las órdenes que están listas para ser recogidas.
  - Configuración para que solo aparezcan las últimas 5 órdenes listas.

### Versión 1.8.0 - 30 de Mayo, 2024

- **Feature: Mejoras en la Experiencia de Usuario**
  - Implementación de un mensaje de carga al ingresar al panel de administración para una experiencia más fluida y amigable.
  - Ahora, al completar una orden en el panel de administración, se muestra un mensaje de "Procesando", brindando una retroalimentación visual clara al usuario.

### Instalación

1. Clona este repositorio.
2. Instala las dependencias con `npm install`.
3. Configura la base de datos en el archivo `.env`.
4. Ejecuta la aplicación con `npm run dev`.
5. Ejecuta la prisma con `npx prisma studio`.
