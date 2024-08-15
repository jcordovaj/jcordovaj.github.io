![1723393014424](image/Readme/inicio.png)

# Portafolio Personal: Demostrando Habilidades Full Stack

## Introducción

Este proyecto nace como resultado de la evaluación al término del módulo 2 del curso "Full Stack Python", con el objetivo de mostrar las habilidades técnicas aprendidas creando una página web funcional y estéticamente agradable que, a su vez,  sirva como vitrina para mostrar, brevemente, quien es el autor y sus proyectos.

La página web es **responsiva**, adaptándose a diferentes dispositivos, y cuenta con las siguientes secciones:

* **Home:** la solución consiste de una sobria pero llamativa sección de "Inicio" o "Home", que posee una interfaz intuitiva, que organiza la información de navegación mostrando las secciones del sitio en la parte superior. Adicionalmente, al cambiar de tamaño para pantallas más pequeñas (responsiveness), el menu se colapsa, ofreciendo una alternativa de interfaz con un menú lateral. Se han agregado tooltips, a algunas etiquetas o textos para facilitar su comprensión, por ejemplo, sobre el ícono del menú lateral en pantallas pequeñas.
  * Imagen Home pantallas grandes:
    ![1723685220624](image/README/1723685220624.png)
  * Imagen Home pantallas pequeñas:
    ![1723685278054](image/README/1723685278054.png)
* **Información personal (Acerca):** Se presenta un breve resumen sobre mi persona e intereses generales.
  * Imagen sección Acerca
    ![1723685494308](image/Readme/About.png)
* **Credenciales:** Esta sección presenta un carrusel de tarjetas (clase card de bootstrap), el visitante podrá desplazarse en la cinta, de izquierda a derecha, utilizando botones de navegación. Cada tarjeta presenta información breve sobre la certificación o habilidad adquirida y un botón que dice "Verificar", que abre el link en la página ofcial.
  * Imagen sección Credenciales
    ![1723685858067](image/README/1723685858067.png)
* **Proyectos:** La siguiente sección es una selección de proyectos (PORTAFOLIO) que representan un conjunto de habilidades a mostrar a los visitantes. La galería se redujo a proyectos destacados. La galería tiene unos efectos de "blur" u "opacamiento", que se activan al pasar el mouse por encima y conecta a los links del contenido en Github o en los sitios donde se encuentran alojados. Los links sin contenido o cortados apuntan a una página de error 404.
  * Imagen sección Proyectos 01
    ![1723686771622](image/README/1723686771622.png)
  * Imagen sección Proyectos 02
    ![1723686795513](image/README/1723686795513.png)
* **Publicaciones:** También se ha incluído una sección con publicaciones, donde se introducen distintos articulos y opiniones escritas por mi, sobre tecnologia y actualidad, ofreciendo al visitante "continuar leyéndolos", y se han agregado los links para leerlos en forma completa desde la fuente.
  * Imagen sección Publicaciones
    ![1723686972270](image/README/1723686972270.png)
* **Timeline:** Para concluir y escapando de la forma tradicional de presentar una hoja de vida, se concibió estructurar una "LINEA DE TIEMPO" y hacerlo más atractivo. Entonces, se presenta la información a través de un concepto gráfico con datos mínimos, si el visitante desea explorar más, se cliquea el link de "Leer más...", y se abre un modal con un detalle más amplio. Para lograr esto, se buscó y adaptó una librería que mostraba noticias. Se ha dejado como ejemplo completo, sólo la primera entrada a la línea de tiempo, el resto de elementos, presentan "Lorem ipsum" en donde corresponde, dejando su llenado para otra versión.
  * Imagen sección Timeline
    ![1723687091008](image/README/1723687091008.png)
* **Formulario de contacto:** Se incluye un formulario de contacto con validación de campos usando scripts de javascript. Tambien se agregó un selector de objetivo del mail (despliega 3 opciones), pudiendo la persona definir si su correo es con propósitos informativos, solicitando un presupuesto o, reclamar por alguna situacion. Se probó integrar el formulario con un servidor virtual de correo, pero no se ha conseguido el resultado esperado, por lo que se dejó reflejada esta mejora en el documento de "Cosas por Hacer" (T2D.md), como un pendiente con prioridad baja.
  * Imagen sección Contacto
    ![1723687248200](image/README/1723687248200.png)
* **Manejo de errores:** Para manejar los links cortados, en aquellos casos que se han dejado intencionalmente en blanco, se ha implementado que muestre una página de error (error404.html)
  * Imagen sección Contacto
    ![1723687301881](image/README/1723687301881.png)

## Estructura del repositorio

Para una mejor comprensión de la ubicación de los archivos y su lógica, se adjunta la siguiente estructura:

![1723680459507](image/README/1723680459507.png)

## Tecnologías Utilizadas

En la realización de este proyecto se han utilizado, principalmente, las siguiente herramientas y tecnologías

* **Bootstrap 5:** Framework CSS para crear diseños responsivos y modernos.
* **JavaScript:** Lenguaje de programación para agregar interactividad.
* **CSS:** Para estilizar la página y crear la apariencia deseada.
* **jQuery:** Biblioteca JavaScript para simplificar la manipulación del DOM.
* **HTML:** Lenguaje de marcado para estructurar el contenido de la página.
* **Visual Studio Code:** Entorno de desarrollo integrado para escribir y depurar el código.
* **Notepad++:** Edición de documentos con formatos específicos, principalmente CSS, MD y JS.
* **Otras tecnologías gráficas:** Se han utilizado otras hmtas. para editar imagenes y crear objetos gráficos.

## Cómo contribuir

Si deseas contribuir a este proyecto, sigue estos pasos:

1. **Visita el sitio:**
   [Portafolio de Jota Cordova](https://jcordovaj.github.io), si te gusta...
2. **Revisa la lista de cosas por hacer - Things to do (T2D):**
   [Ir al documento T2D](https://github.com/jcordovaj/jcordovaj.github.io.git/assets/docs/t2d.pdf), si crees que tienes algo que aportar...
3. **Revisa la [Guía de Estilo y Buenas Practicas del Proyecto](https://github.com/jcordovaj/jcordovaj.github.io.git/assets/docs/buenasPracticas.md):** luego, si quieres mantenerte informado...
4. **Solicita ser agregado como colaborador a TRELLO:** [Ir al tablero del Proyecto](https://trello.com/b/thnQjQ3S/things-2-do) ahora sí, manos a la obra ....
5. **Clona el repositorio:**

   ```bash
   git clone https://github.com/jcordovaj/jcordovaj.github.io.git
   ```

6. **Sube tu request:**
   * **Documenta tus aportes:** Utiliza nomenclatura y convenciones de nombres de acuerdo a la Guía de Estilo y Buenas Prácticas. Al finalizar, genera una nota de versionado en formato md, que indique la sección que fue afectada, las clases modificadas y js que esté involucrado.
   * **Estilo y Diseño:** Mantén la paleta de colores y un estilo minimalista.
   * **Prohibiciones:** No incorporar contenido ajeno al objetivo del sitio, tampoco ideológico, ilegal, publicitario o mal intencionado.
   * **Imagenes u otro contenido audiovisual:** Deben estar libres de derechos (copyright).
7. **Finalmente, si te gusto el proyecto y has decidido participar, [dame una estrella](https://github.com/jcordovaj/jcordovaj.github.io/):**
![Logo de GitHub](./assets/img/github-star-75px.webp)
