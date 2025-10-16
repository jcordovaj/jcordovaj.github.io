// =====================================================================
// 1. Lógica que SÓLO requiere que el DOM esté cargado (DOMContentLoaded / $(document).ready)
// Esto asegura que jQuery y todos los elementos estén listos para ser manipulados.
// =====================================================================
$(document).ready(function() {
  // --- LÓGICA DEL MENÚ (de main.js) ---
  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }
  };
  showMenu("nav-toggle", "nav-menu");

  // --- AJUSTE DEL MENÚ PARA MÓVILES (de main.js) ---
  const navLink = document.querySelectorAll(".nav__link");
  function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    if (navMenu) {
      navMenu.classList.remove("show");
    }
  }
  navLink.forEach(n => n.addEventListener("click", linkAction));

  // --- LIMPIA EL FORMULARIO (de local.js) ---
  const form = document.querySelector("form");
  const cancelButton = document.querySelector(".contact__button__cancel");
  if (cancelButton && form) {
    // Asegurarse de que existan
    cancelButton.addEventListener("click", e => {
      e.preventDefault(); // Evita el comportamiento predeterminado del botón si es un 'submit'
      form.reset();
    });
  }

  // --- CONTROL DE MODALES (de modal.js) ---
  // NOTA: Es mejor asignar los listeners al cargar, no en una función global.
  window.toggleModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "block";
      const closeBtn = modal.querySelector(".close");
      if (closeBtn) {
        closeBtn.onclick = function() {
          modal.style.display = "none";
        };
      }
    }
  };

  // --- LÓGICA DEL MULTICAROUSEL (de multicarousel.js) ---
  var itemsMainDiv = ".MultiCarousel";
  var itemsDiv = ".MultiCarousel-inner";
  var itemWidth = "";

  $(".leftLst, .rightLst").click(function() {
    var condition = $(this).hasClass("leftLst");
    if (condition) click(0, this);
    else click(1, this);
  });

  // Llamada inicial para calcular el tamaño
  ResCarouselSize();
  // Se recalcula al cambiar el tamaño de la ventana
  $(window).resize(function() {
    ResCarouselSize();
  });

  // ... (Mantener las funciones ResCarouselSize, ResCarousel y click) ...
  function ResCarouselSize() {
    var incno = 0;
    var dataItems = "data-items";
    var itemClass = ".item";
    var id = 0;
    var btnParentSb = "";
    var itemsSplit = "";
    var sampwidth = $(itemsMainDiv).width();
    var bodyWidth = $("body").width();
    $(itemsDiv).each(function() {
      id = id + 1;
      var itemNumbers = $(this).find(itemClass).length;
      btnParentSb = $(this).parent().attr(dataItems);
      itemsSplit = btnParentSb.split(",");
      $(this).parent().attr("id", "MultiCarousel" + id);

      if (bodyWidth >= 1200) {
        incno = itemsSplit[3];
        itemWidth = sampwidth / incno;
      } else if (bodyWidth >= 992) {
        incno = itemsSplit[2];
        itemWidth = sampwidth / incno;
      } else if (bodyWidth >= 768) {
        incno = itemsSplit[1];
        itemWidth = sampwidth / incno;
      } else {
        incno = itemsSplit[0];
        itemWidth = sampwidth / incno;
      }

      $(this).css({
        transform: "translateX(0px)",
        width: itemWidth * itemNumbers
      });
      $(this).find(itemClass).each(function() {
        $(this).outerWidth(itemWidth);
      });
      $(".leftLst").addClass("over");
      $(".rightLst").removeClass("over");
    });

    // **IMPORTANTE: Al terminar de redimensionar el carrusel, haz un SR.SYNC()**
    // Esto se ejecutará en la sección window.load, la cual veremos a continuación.
  }

  function ResCarousel(e, el, s) {
    var leftBtn = ".leftLst";
    var rightBtn = ".rightLst";
    var translateXval = "";
    var divStyle = $(el + " " + itemsDiv).css("transform");
    var values = divStyle.match(/-?[\d\.]+/g);
    var xds = Math.abs(values[4]);
    if (e == 0) {
      translateXval = parseInt(xds) - parseInt(itemWidth * s);
      $(el + " " + rightBtn).removeClass("over");
      if (translateXval <= itemWidth / 2) {
        translateXval = 0;
        $(el + " " + leftBtn).addClass("over");
      }
    } else if (e == 1) {
      var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
      translateXval = parseInt(xds) + parseInt(itemWidth * s);
      $(el + " " + leftBtn).removeClass("over");
      if (translateXval >= itemsCondition - itemWidth / 2) {
        translateXval = itemsCondition;
        $(el + " " + rightBtn).addClass("over");
      }
    }
    $(el + " " + itemsDiv).css(
      "transform",
      "translateX(" + -translateXval + "px)"
    );
  }

  function click(ell, ee) {
    var Parent = "#" + $(ee).parent().attr("id");
    var slide = $(Parent).attr("data-slide");
    ResCarousel(ell, Parent, slide);
  }

  // --- OTRAS FUNCIONES (de script.js) ---
  // (Asegúrate de que estás cargando Bootstrap y JQuery correctamente)
  // Efecto de desplazamiento suave (sin debounce en este listener)
  $(".badges-container").on("click", ".badge", function() {
    $(this).parent().animate(
      {
        scrollLeft: $(this).offset().left - $(this).parent().offset().left
      },
      500
    );
  });

  // Updating Theme Checkmark (Si usa Bootstrap, asumo que es correcto)
  const themeButtons = document.querySelectorAll(".dropdown-item button");
  themeButtons.forEach(button => {
    button.addEventListener("click", () => {
      const themeValue = button.dataset.bsThemeValue;
      document.body.classList.remove("light", "dark");
      document.body.classList.add(themeValue);

      // Lógica de checkmark
      const activeItem = document.querySelector(".dropdown-item.active");
      if (activeItem) activeItem.classList.remove("active");
      button.closest(".dropdown-item").classList.add("active");
    });
  });
});

// =====================================================================
// 2. Lógica que SÓLO requiere que la PÁGINA COMPLETA esté cargada (window.load)
// Esto es VITAL para ScrollReveal y para el ScrollSpy que depende de offsets.
// =====================================================================
window.addEventListener("load", function() {
  // --- FUNCIÓN SCROLLSPY CORREGIDA Y UNIFICADA (de main.js, eliminando script.js) ---
  // SOLO USAMOS ESTA VERSIÓN. La versión de script.js es redundante y conflictiva.
  const sections = document.querySelectorAll("section[id]");

  function scrollActive() {
    const scrollY = window.scrollY;
    const headerHeight = 50; // Usado en tu script original como offset

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - headerHeight;
      const sectionId = current.getAttribute("id");
      const navLink = document.querySelector(
        `.nav__menu a[href*='${sectionId}']`
      );

      if (navLink) {
        // La lógica original funciona, la mantenemos:
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add("active");
        } else {
          navLink.classList.remove("active");
        }
      }
    });
  }
  // Inicializa al cargar y luego con el scroll
  scrollActive();
  window.addEventListener("scroll", scrollActive);

  // --- FUNCIÓN: SCROLLREVEAL (de main.js) ---
  // **EJECUTADA AQUÍ PARA GARANTIZAR EL TAMAÑO DE TODOS LOS ELEMENTOS**
  const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true
  });

  // ... (Mantener todas tus llamadas sr.reveal) ...
  sr.reveal(".home__title", {});
  sr.reveal(".home__scroll", { delay: 200 });
  sr.reveal(".home__img", { origin: "right", delay: 400 });
  // etc...

  sr.reveal(".MultiCarousel", { delay: 600 });
  // etc...

  // Si la lógica de MultiCarousel o temas manipula el DOM después del load,
  // puedes forzar a ScrollReveal a recalcular:
  // sr.sync();
});
