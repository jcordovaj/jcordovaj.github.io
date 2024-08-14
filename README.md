![1723393014424](image/Readme/inicio.png)

# Portafolio Personal: Demostrando Habilidades Full Stack

## Introducción

Este proyecto nace como resultado de la evaluación al término del módulo 2 del curso "Full Stack Python", con el objetivo de mostrar las habilidades técnicas aprendidas creando una página web funcional y estéticamente agradable que, a su vez,  sirva como vitrina para mostrar, brevemente, quien es el autor y sus proyectos.

La página web es **responsiva**, adaptándose a diferentes dispositivos, y cuenta con las siguientes secciones:

* **Home:** Una atractiva interfaz que organiza la información de navegación que, adicionalmente, se colapsa al cambiar de tamaño, ofreciendo una alternativa con un acceso con un menú lateral.
* **Información personal:** Un breve resumen sobre mi persona e intereses generales.
* **Habilidades:** Junto con una explicación se ha implementado un carrusel que muestra certificaciones en forma interactiva, accediendo ademas al link de verificacion de cada una.
* **Proyectos:** Se ha implementado una selección de proyectos que representen el conjunto de habilidades a mostrar a los visitantes. La galería se redujo a proyectos destacados.
* **Artículos:** Se presenta una introduccion a distintos articulos y opiniones escritos por mi sobre tecnologia y se agrega un link para leerlos en forma completa desde la fuente.
* **Timeline:** Se presenta la información como un concepto grafico en una linea de tiempo, se adaptó una librería para mostrar noticias. Esto permite acceder a información expansiva sobre experiencias especificas de la trayectoria profesional.
* **Formulario de contacto:** Se incluye un formulario de contacto con validación de campos usando scripts de javascript. Tambien se agregó un selector de objetivo del mail (despliega 3 opciones), pudiendo la persona definir si su correo es con propósitos informativos, solicitando un presupuesto o, reclamar por alguna situacion.


## Estructura del repositorio

Para una mejor comprensión de la ubicación de los archivos y su lógica, se adjunta la siguiente estructura:

Repos

  │─ jcordovaj.github.io		(Raíz del sitio en Github, contiene index.html, error404.html, carpetas: .assets, image, Readme.md)
  ├─ assets				(Carpeta que contiene las carpetas CSS, JS, docs, img)
  │  ├─ css				(Configuraciones de estilo, contiene styles y error404)
  │  │  ├─ error404.css		(Configuraciones de estilo página error404)
  │  │  └─ styles.css			(Configuraciones de estilo personalizadas styles)
  │  ├─ docs				(Documentación del proyectos readme en pdf y html, t2d )
  │  │  ├─ readme.html		(Versión html del readme)
  │  │  ├─ readme.pdf		(Versión pdf del readme)
  │  │  ├─ buenasPracticas.md (Guía de estilo y buenas prácticas)
  │  │  └─ t2d.md			(Archivo cosas por hacer o things to do, para colaboradores del proyecto)
  │  ├─ img				(Carpeta con imagenes, contiene carpetas: 640x425, badges_sm, capturas, js)
  │  │  ├─ 640x425			(Carpeta con imagenes en formato 640x425, usadas en sección Proyectos)
  │  │  ├─ badges_sm		(Carpeta con imagenes en full y sm de las credenciales mostradas en la sección SKILLS)
  │  │  ├─ capturas			(Carpeta que contiene imagenes del sitio que se usan para documentar su estructura)
  │  └─ js					(Carpeta que crea archivos javascript )
  │     ├─ bootstrap.min.js	(librería estándar)
  │     ├─ local.js			(script personalizado)
  │     ├─ modal.js			(script modal sección timeline)
  │     ├─ main.js			(scripts usado por librería scroll reveal, usada para dar el efecto de cascada de los elementos)
  │     ├─ multicarousel.js	(librería usada para mostrar las credenciales)
  │     └─ script.js		(scripts personalizado, limpia el formulario de correo)
  ├─ error404.html		(Página para links cortados)
  ├─ image				(Carpeta que crea el editor MD cuando se le agregan imágenes, en este caso README o T2D, etc.)
  ├─ index.html			(Página principal)
  └─ Readme.md			(Información del proyecto)

## Tecnologías Utilizadas

En la realización de este proyecto se han utilizado, principalmente, las siguiente herramientas y tecnologías

* `<i class="bi bi-bootstrap"></i>` **Bootstrap 5:** Framework CSS para crear diseños responsivos y modernos.
* **JavaScript:** Lenguaje de programación para agregar interactividad.
* **CSS:** Para estilizar la página y crear la apariencia deseada.
* **jQuery:** Biblioteca JavaScript para simplificar la manipulación del DOM.
* **HTML:** Lenguaje de marcado para estructurar el contenido de la página.
* **Visual Studio Code:** Entorno de desarrollo integrado para escribir y depurar el código.
* **Notepad++:** Edición de documentos con formatos específicos, principalmente CSS, MD y JS.
* **Otras tecnologías gráficas:** Se han utilizado otras hmtas. para manipular imagenes y crear objetos gráficos.

## Cómo contribuir

Si deseas contribuir a este proyecto, sigue estos pasos:

1. **Visita el sitio:**
   (https://jcordovaj.github.io), si te gusta... 
2. **Revisa la lista de cosas por hacer - Things to do (T2D):**
   (https://github.com/jcordovaj/jcordovaj.github.io.git/assets/docs/t2d.md), crees que tienes algo que aportar...
3. **Revisa la lista de Guía de Estilo y Buenas Practicas del Proyecto:**
   (https://github.com/jcordovaj/jcordovaj.github.io.git/assets/docs/buenasPracticas.md), quieres mantenerte informado...   
4. **Solicita ser agregado como colaborador a TRELLO:**
   (https://trello.com/b/thnQjQ3S/things-2-do), manos a la obra ....   
5. **Clona el repositorio:**

   ```bash
   git clone https://github.com/jcordovaj/jcordovaj.github.io.git

   ```
6. **Sube tu request:**
   * **Documenta tus aportes:** Utiliza nomenclatura y convenciones de nombres de acuerdo a PEP8. Al finalizar, genera una nota de versionado en formato md, que indique la sección que fue afectada, las clases modificadas y js que esté involucrado.
   * **Estilo y Diseño:** Mantén la paleta de colores y un estilo minimalista.
   * **Prohibiciones:** No incorporar contenido ajeno al objetivo del sitio, ideológico, ilegal, publicitario o mal intencionado.
   * **Imagenes u otro contenido audiovisual:** Deben estar libres de derechos (copyright).
7. **Finalmente, si te gusto el proyecto y has decidido participar, dame una estrella:**

`<a href="https://github.com/jcordovaj/jcordovaj.github.io/star"><i class="fa fa-star">``</i>` Yo te apoyo!!!`</a>`![Logo de GitHub](./assets/img/github-star-sm.webp)