$(document).ready(function() {
  // Función de debounce
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
  };

  // ScrollSpy con debounce
  const handleScroll = debounce(() => {
    try {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      for (const section of sections) {
        const offset = section.offsetTop;
        if (offsetY + section.offsetHeight >= scrollY && scrollY >= offset) {
          const navLink = document.querySelector(`a[href="#${section.id}"]`);
          navLink.classList.add("active");
        } else {
          navLink.classList.remove("active");
        }
      }
    } catch (error) {
      console.error("Error en ScrollSpy:", error);
    }
  }, 100);

  window.addEventListener("scroll", handleScroll);

  // Efecto de desplazamiento suave al hacer clic en las flechas (opcional)
  $(".badges-container").on("click", ".badge", function() {
    $(this).parent().animate(
      {
        scrollLeft: $(this).offset().left - $(this).parent().offset().left
      },
      500
    );
  });
  
  // Updating Theme Checkmark
  const themeButtons = document.querySelectorAll(".dropdown-item button");

  themeButtons.forEach(button => {
    button.addEventListener("click", () => {
      const themeValue = button.dataset.bsThemeValue;
      document.body.classList.remove("light", "dark"); // Remove existing classes
      document.body.classList.add(themeValue); // Add new class based on theme

      // Update the checkmark icon for selected theme (optional)
      const selectedButton = document.querySelector(".dropdown-item.active");
      selectedButton.querySelector(".bi.ms-auto").classList.remove("d-none"); // Show checkmark
      button.querySelector(".bi.ms-auto").classList.add("d-none"); // Hide other checkmarks
    });
    window.addEventListener("scroll", function() {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      for (const section of sections) {
        const offset = section.offsetTop;
        if (offsetY + section.offsetHeight >= scrollY && scrollY >= offset) {
          const navLink = document.querySelector(`a[href="#${section.id}"]`);
          navLink.classList.add("active");
        } else {
          navLink.classList.remove("active");
        }
      }
    });
  });
});
