# ![1723405228012](image/Readme/1723405228012.png)Proyecto Portafolio Personal: Demostrando Habilidades Full Stack

## Introducción

Este proyecto nace como resultado de la evaluación al término del módulo 2 del curso "Full Stack Python", con el objetivo de mostrar las habilidades técnicas aprendidas creando una página web funcional y estéticamente agradable que, a su vez,  sirva como vitrina para mostrar, brevemente, quien es el autor y sus proyectos.

La página web es **responsiva**, adaptándose a diferentes dispositivos, y cuenta con las siguientes secciones:

* **Información personal:** Un breve resumen sobre el autor y sus intereses en la SECCIÓN: "About"/"Acerca de". Se personalizan los estilos CSS, en la sección del mismo nombre.
* **Credenciales:** Se organizan visualmente las babilidades en un carrusel que muestra certificaciones en forma interactiva, accediendo ademas al link de verificacion. Se utiliza una librería javascript llamada "Multicarrousel".
* **Proyectos:** Una galería con proyectos destacados.
* **Artículos:** Presenta una introduccion a distintos articulos escritos por el autor sobre tecnologia y un link para leerlos en forma completa.
* **Timeline:** Se presenta como un concepto grafico en una linea de tiempo, que permite acceder a informacion expansiva sobre experiencias especificas de la trayectoria profesional.
* **Formulario de contacto:** Se incluye un formulario de contacto con validación de campos usando scripts de javascript. Tambien se agrego un selector de objetivo, pudiendo la persona indicar si es por informacion, solicitar un presupuesto o, reclamar por alguna situacion.

## Estructura del repositorio

Para una mejor comprensión de la ubicación de los archivos y su lógica, se adjunta la siguiente estructura:

Repos

  │─ jcordovaj.github.io		(Raíz del archivo en Github, contiene index.html, error404.html, carpetas: .assets, image, Readme.med)
  ├─ assets				(Carpeta que contiene las carpetas CSS, JS, docs, img)
  │  ├─ css				(Configuraciones de estilo, contiene styles y error404)
  │  │  ├─ error404.css		(Configuraciones de estilo página error404)
  │  │  └─ styles.css			(Configuraciones de estilo personalizadas styles)
  │  ├─ docs				(Documentación del proyectos readme en pdf y html, t2d )
  │  │  ├─ readme.html		(Versión html del readme)
  │  │  ├─ readme.pdf		(Versión pdf del readme)
  │  │  └─ t2d.md			(Archivo cosas por hacer o things to do, para colaboradores del proyecto)
  │  ├─ img				(Carpeta con imagenes, contiene carpetas: 640x425, badges_sm, capturas, js)
  │  │  ├─ 640x425			(Carpeta con imagenes en formato 640x425, usadas en sección Proyectos)
  │  │  │  ├─ 1.jpg
  │  │  │  ├─ 3.png
  │  │  │  ├─ 4.jpg
  │  │  │  ├─ anomalias.png
  │  │  │  ├─ cinefilos.gif
  │  │  │  ├─ dashventas.png
  │  │  │  ├─ descarga1.jpg
  │  │  │  ├─ encuesta.png
  │  │  │  ├─ Looker1.png
  │  │  │  └─ pfinal.PNG
  │  │  ├─ articulo-1.PNG
  │  │  ├─ badges_sm		(Carpeta con imagenes en full y sm de las credenciales mostradas en la sección SKILLS)
  │  │  │  ├─ BI_FoundProCert_BIFPC.png
  │  │  │  ├─ BI_FoundProCert_BIFPC_sm.png
  │  │  │  ├─ british_changingandgrowbiz_c1.png
  │  │  │  ├─ british_changingandgrowbiz_c1_sm.png
  │  │  │  ├─ British_PeopleandEventsC1.png
  │  │  │  ├─ British_PeopleandEventsC1_sm.png
  │  │  │  ├─ british_productresearchanddevel_c1.png
  │  │  │  ├─ british_productresearchanddevel_c1_sm.png
  │  │  │  ├─ British_RecreationandRelaxC1.png
  │  │  │  ├─ British_YesterdayTodayandTomorrowC1.png
  │  │  │  ├─ British_YesterdayTodayandTomorrowC1_sm.png
  │  │  │  ├─ LeanSixSigmaWhiteBeltProfessionalCertificationLSSWBPC.png
  │  │  │  ├─ LeanSixSigmaWhiteBeltProfessionalCertificationLSSWBPC_sm.png
  │  │  │  ├─ lifelong-learning.png
  │  │  │  ├─ PendoSuperCertified.png
  │  │  │  ├─ PendoSuperCertified_sm.png
  │  │  │  ├─ pendo_ai4productmanagement.png
  │  │  │  ├─ pendo_ai4productmanagement_sm.png
  │  │  │  ├─ pendo_digitaladoption.png
  │  │  │  ├─ pendo_digitaladoption_sm.png
  │  │  │  ├─ pendo_productanalytic.png
  │  │  │  ├─ pendo_productanalytic_sm.png
  │  │  │  ├─ Postman.png
  │  │  │  ├─ Postman_sm.png
  │  │  │  ├─ ScrumFoundationProfessionalCertificationSFPC.png
  │  │  │  └─ ScrumFoundationProfessionalCertificationSFPC_sm.png
  │  │  ├─ banner-bg.jpg
  │  │  ├─ capturas			(Carpeta que contiene imagenes del sitio que se usan para documentar su estructura)
  │  │  │  ├─ inicio.PNG
  │  │  │  └─ inicio_pantallas_sm.PNG
  │  │  ├─ chile02_512x512.png
  │  │  ├─ github-stars-logo_Color.webp
  │  │  ├─ ia_en_product_mngnt.PNG
  │  │  ├─ IMG_20220226_110724.jpg
  │  │  ├─ jc.ico
  │  │  ├─ OpinionBraverman.PNG
  │  │  ├─ opinionEconomics.PNG
  │  │  ├─ perfil.jpg
  │  │  ├─ perfil.png
  │  │  └─ perfil_bg.png
  │  └─ js					(Carpeta que crea archivos javascript )
  │     ├─ bootstrap.min.js	(Librería estándar)
  │     ├─ local.js			(script prersonalizado)
  │     ├─ main.js			(scripts usado por librería scroll reveal, usada para dar el efecto de cascada de los elementos)
  │     ├─ multicarousel.js	(Librería usada para mostrar las credenciales)
  │     └─ script.js			(scripts personalizados, por ejemplo, limpiar el formulario de correo)
  ├─ error404.html
  ├─ image				(Carpeta que crea el editor MD cuando se le agregan imágenes, en este caso README)
  │  └─ Readme
  │     └─ inicio.png
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
* **Notepad++:** Edición de documentos con formatos específicos, principalmente CSS y JS.

## Cómo contribuir

Si deseas contribuir a este proyecto, sigue estos pasos:

1. **Visita el sitio:**
   (https://jcordovaj.github.io)
2. **Revisa la documentación y descripción del Proyecto:**
   (https://github.com/jcordovaj/jcordovaj.github.io.git/docs/)
3. **Revisa la lista de cosas por hacer (T2D):**
   (https://github.com/jcordovaj/jcordovaj.github.io.git/t2d.md)
4. **Clona el repositorio:**

   ```bash
   git clone https://github.com/jcordovaj/jcordovaj.github.io.git

   ```
5. **Sube tu request:**

   * **Documenta tus aportes:** Utiliza nomenclatura y convenciones de nombres de acuerdo a PEP8. Al finalizar, genera una nota de versionado en formato md, que indique la sección que fue afectada, las clases modificadas y js que esté involucrado.
   * **Estilo y Diseño:** Mantén la paleta de colores y un estilo minimalista.
   * **Prohibiciones:** No incorporar contenido ajeno al objetivo del sitio, ideológico, ilegal, publicitario o mal intencionado.
   * **Imagenes u otro contenido audiovisual:** Deben estar libres de derechos (copyright).
6. **Finalmente, si te gusto, dame una estrella:**

`<a href="https://github.com/jcordovaj/jcordovaj.github.io/star"><i class="fa fa-star">``</i>` Yo te apoyo!!!`</a>`

![Logo de GitHub](./assets/img/github-stars-logo_Color.webp)
