# 🌌 Tech-House Api tasks

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)


## 📝 Descripción
Backend para la obtención de datos de la [TASK](https://jsonplaceholder.typicode.com/todos/) (jsonplaceholder todos) usando Node.js, Express. Este proyecto incluye un cron job que extrae datos de la API de manera regular y los almacena en una base de datos Mongo.
Luego del cron job, tiene la capacidad de agregar y quitar todos de la base de datos.


## 🎨 Funcionalidades

- Cron jobs que obtiene datos de jsonplaceholder
- Conexion a base de datos Mongo.
- Agregar todo a la base de datos.
- Remover todo de la base.

## 🔧 Instalación

1. **Clona el repositorio**:

    ```bash
    git clone https://github.com/mavillabasa-dev/tech-house-api
    cd tech-house-mini
    ```

2. **Instala las dependencias**:

    ```bash
    npm install
    ```

2. **Ejecución**:

    ```bash
    npm run dev
    ```
La aplicación debería estar corriendo en [http://localhost:5000](http://localhost:5000).

## 📁 Estructura del Proyecto

- **`/src`**: Código fuente del proyecto.
  - **`/controllers`**: Controladores para manejar la lógica de negocio.
  - **`/services`**: Servicios que interactúan con la API de JSONPLACEHOLDER.
  - **`/routes`**: Rutas de la aplicación Express.
  - **`index.ts`**: Punto de entrada de la aplicación.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes sugerencias o mejoras, por favor abre un [issue](https://github.com/tu-usuario/tu-repositorio/issues) o envía un [pull request](https://github.com/tu-usuario/tu-repositorio/pulls).

## 🧑‍💻 Autor

Marcos Villabasa - [@mavillabasa-dev](https://github.com/mavillabasa-dev/)

## 📜 Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).
