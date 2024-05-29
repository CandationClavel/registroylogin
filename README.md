# Sistema de Registro y Login con Node.js y Express

**Este es un proyecto realizado para la materia Ingeniería de Software I, impartida por el profesor Juan Pablo Soto Barrera, durante el semestre 2024-1. Esta materia forma parte del plan académico de la Licenciatura en Ciencias de la Computación de la Universidad de Sonora.**

## Objetivo General
Desarrollar un sistema de registro y login utilizando Node.js y Express para proporcionar autenticación segura y acceso controlado a una aplicación web.

## Objetivos Específicos
- Implementar un servidor Node.js utilizando Express para manejar las solicitudes HTTP.
- Diseñar y desarrollar un sistema de almacenamiento de usuarios utilizando una base de datos MySQL.
- Crear endpoints de API RESTful para la gestión de usuarios, incluyendo registro, inicio de sesión y cierre de sesión.
- Aplicar medidas de seguridad, como hashing de contraseñas y manejo de sesiones, para proteger la información de los usuarios.

## Historias de Usuario

### 1. Como usuario nuevo, quiero poder registrarme en la plataforma para acceder a sus servicios.
- **Descripción**: Un nuevo usuario debe poder crear una cuenta proporcionando la información necesaria.
- **Criterios de Aceptación**:
  - El formulario de registro debe requerir un nombre de usuario, dirección de correo electrónico y contraseña.
  - La contraseña debe ser encriptada antes de ser almacenada.
  - Si el nombre de usuario o correo electrónico ya existe, el sistema debe notificar al usuario.
- **Tareas**:
  - Crear la ruta de registro en Express.
  - Validar los datos del formulario en el servidor.
  - Encriptar la contraseña con bcryptjs.
  - Guardar los datos del usuario.

### 2. Como usuario registrado, quiero poder iniciar sesión en la plataforma para acceder a mi cuenta.
- **Descripción**: Los usuarios existentes deben poder autenticarse en la plataforma utilizando sus credenciales.
- **Criterios de Aceptación**:
  - El formulario de inicio de sesión debe requerir el nombre de usuario y la contraseña.
  - Si las credenciales son correctas, el sistema debe generar y enviar un token.
  - Si las credenciales son incorrectas, el sistema debe notificar al usuario.
- **Tareas**:
  - Crear la ruta de inicio de sesión en Express.
  - Validar las credenciales del usuario.
  - Comparar la contraseña proporcionada con la encriptada almacenada.
  - Generar un token para usuarios autenticados.

### 3. Como usuario registrado, quiero poder cerrar sesión en la plataforma para proteger mi cuenta.
- **Descripción**: Los usuarios deben poder cerrar sesión y terminar su sesión actual.
- **Criterios de Aceptación**:
  - El sistema debe invalidar el token en el cliente.
  - El usuario debe ser redirigido a la página de inicio después de cerrar sesión.
- **Tareas**:
  - Crear la ruta de cierre de sesión en Express.
  - Implementar el cierre de sesión en el cliente.

### 4. Como usuario, quiero que mis contraseñas estén protegidas para garantizar la seguridad de mi cuenta.
- **Descripción**: Las contraseñas de los usuarios deben ser manejadas de manera segura.
- **Criterios de Aceptación**:
  - Las contraseñas deben ser encriptadas utilizando bcryptjs antes de ser almacenadas.
- **Tareas**:
  - Implementar el hashing de contraseñas con bcryptjs.

## Dependencias del Proyecto
- **bcryptjs**: Librería para el hashing de contraseñas.
- **cookie-parser**: Middleware para analizar cookies en solicitudes HTTP.
- **dotenv**: Cargar variables de entorno desde un archivo `.env` en `process.env`.
- **express**: Framework web para Node.js.
- **jsonwebtoken**: Implementación de JSON Web Tokens para la autenticación y autorización.
- **nodemon**: Herramienta para desarrollar aplicaciones Node.js que reinicia automáticamente el servidor cuando se detectan cambios en los archivos.
- **sequelize**: Se utiliza como un ORM (Object-Relational Mapping) para Node.js, específicamente para interactuar con una base de datos relacional, en este caso, MySQL
- **mysql**: Cliente de MySQL para Node.js que proporciona una interfaz rápida y eficiente para conectar y realizar consultas a bases de datos MySQL.

## Instrucciones para Ejecutar el Proyecto

1. **Instalar Node.js**: 
   - Asegúrate de tener Node.js instalado desde [nodejs.org](https://nodejs.org/es). También se necesitará MySQL instalado desde [dev.mysql.com](https://dev.mysql.com/downloads/mysql/).

2. **Clonar el repositorio**:
   - Desde una consola, clona el repositorio con el comando:
     ```bash
     git clone https://github.com/CandationClavel/registroylogin.git
     ```

3. **Entrar a la carpeta del proyecto clonado**:
   - Si se entra directamente, una vez en la carpeta, dar clic derecho y elegir “Abrir en Terminal”.
   - Si se entra desde la consola, escribir el comando:
     ```bash
     cd registroylogin
     ```

4. **Instalar las dependencias**:
   - Desde la carpeta del proyecto, instala las dependencias usando el comando:
     ```bash
     npm i
     ```

5. **Ejecutar el servidor**:
   - Inicia el servidor con el comando:
     ```bash
     npm run dev
     ```

6. **Acceder a la aplicación**:
   - Abre tu navegador y entra a `http://localhost:4000`.
