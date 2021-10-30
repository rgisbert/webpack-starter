Quiere utilizar este proyecto para crear una carpeta vacía y utilizarlo como base para crear otros proyectos.
En el primer vídeo, además de todas las ventajas, también comenta un par de desventajas:

    - Configurar un proyecto de 0 a veces puede ser complicado.
    - A veces da un error y no sabes muy bien qué paquete lo genera y cómo solucinarlo.

A pesar de lo comentado, tiene muchisimas más ventajas y comenta que sigue valiendo muchísimo la pena, que puede incluso llegar a ahorrar meses de trabajo porque tienes facilidades para usar código nuevo en navegadores antiguos, minificar, cambiar hash de un archivo para que el navegador no lo cachee, etc.

----------------------------

PASOS:
    0 Asegurarme que tengo ciertas instalaciones: node ( >8) y npm ( >3).
    1 npm init (seguir pasos) --> al finalizar crea package.json. Aquí sé qué paquetes utiliza mi aplicación, si están en producción o desarrollo, etc.

----------------------------

Notas:
Es importante que exista la carpeta src, ya que webpack la busca específicamente para trabajar con ella.

----------------------------

Web pasos instalación:
Detalla los procesos de instalación: https://webpack.js.org/guides/getting-started/  (En el actual webpack v5.60)
npm install --save-dev webpack webpack-cli

----------------------------

En la raíz crea webpack.config.js es la configuración que webpack buscará cuando ejecute npm run build.
Además ahí crea reglas como pedir que mueva index.html a dist, o que renombre el main.js en index y le añada hash para evitar el cacheo.
Ante de todo eso necesita instalar:

    npm install --save-dev html-loader html-webpack-plugin

-----------------------------

Fernando dice que el webpack de desarrollo y el de producción se pueden utilizar en mismo archivo, pero que él prefiere tener dos archivos diferentes. En este caso crea: 

    webpack.prod.js

Además instala más paquetes que sólo va a utilizar para esta versión:

    css-minimizer-webpack-plugin
    terser-webpack-plugin