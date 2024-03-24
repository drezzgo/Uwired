# Uwired

Uwired es una aplicación web desarrollada para ayudar a los ingenieros y profesionales en el campo de las redes inalámbricas a determinar el cumplimiento de estaciones transmisoras de radiocomunicaciones con la resolución 773 de la ANE (Autoridad Nacional de Espectro). La aplicación utiliza tecnologías web modernas y ofrece una interfaz intuitiva para ingresar datos y visualizar resultados.

## Características

- **Determinación de Cumplimiento:** Uwired permite a los usuarios ingresar características específicas de una estación transmisora, como potencia, altura, ganancia y frecuencia, y realiza un análisis para determinar si cumple con los criterios establecidos en la resolución 773 de la ANE.
  
- **Interfaz Intuitiva:** La aplicación cuenta con un formulario interactivo que guía a los usuarios a través del proceso de ingreso de datos. Los resultados se presentan de manera clara y comprensible mediante gráficos explicativos.
  
- **Funcionalidades Adicionales:** Uwired ofrece la opción de dejar comentarios y guardarlos asociados al correo electrónico del usuario. También permite imprimir los resultados obtenidos una vez que el usuario haya registrado su correo electrónico.

## Instalación

1. Clona este repositorio en tu máquina local utilizando

```sh
git clone
```
2. Configura el entorno de desarrollo y asegúrate de tener instaladas las dependencias necesarias.
3. Ejecuta la aplicación en tu servidor local.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

## 🚀 Estructura del Proyecto

Dentro del proyecto , verás las siguientes carpetas y archivos:

```text
/
├── public/ #Aqui los logos del proyecto
│   └── favicon.svg
├── src/
│   ├── components/ #Recursividad del proyecto
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro busca archivos .astro o .md en el directorio src/pages/. Cada página se expone como una ruta basada en el nombre de su archivo.

No hay nada especial en src/components/, pero ahí es donde nos gusta colocar los componentes de Astro/React/Vue/Svelte/Preact.

Cualquier activo estático, como imágenes, puede colocarse en el directorio public/.

## 🧞  Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                   | Accion                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                            |
| `npm run dev`             | Inicia el servidor de desarrollo local en localhost:4321      |
| `npm run build`           | Construye tu sitio de producción en `./dist/`          |
| `npm run preview`         | Previsualiza tu construcción localmente, antes de implementar     |
| `npm run astro ...`       | Ejecuta comandos de CLI como `astro add`, `astro check` |
| `npm run astro -- --help` | Obtén ayuda usando el CLI de Astro                     |

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir a Uwired, por favor sigue estos pasos:

1. Haz un fork de este repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit de ellos (`git commit -am 'Agrega nueva característica'`).
4. Sube tus cambios a la rama (`git push origin feature/nueva-caracteristica`).
5. Crea un nuevo Pull Request.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto con nosotros a través de [agongoraramirez@gmail.com](Andres :agongoraramirez@gmail.com, Santiago:kevinsaldaña@gmail.com, Brayan:eight_bs@outlook.com).
