// tipeo de "web design"
        document.addEventListener('DOMContentLoaded', function() {
          var element = document.querySelector('.webdesign'); // Obtén el elemento donde se mostrará el texto
  
          var text = 'Web Design-'; // Texto que se mostrará
          var speed =250; // Velocidad de tipeo en milisegundos por carácter
  
          var index = 0; // Índice para rastrear el carácter actual
          var timer;
  
          // Función para agregar un carácter al texto
          function addChar() {
            element.textContent = text.slice(0, index); // Actualiza el contenido con el texto parcial
            element.innerHTML += '<span class="cursor">|</span>'; // Agrega el cursor de tipeo
  
            index++;
  
            if (index < text.length) {
              timer = setTimeout(addChar, speed); // Espera la velocidad de tipeo antes de agregar el siguiente carácter
            }
          }
  
          // Comienza el efecto de tipeo
          addChar();
        });

// flecha de scroll to top

  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $('.scroll-to-top').addClass('show');
      } else {
        $('.scroll-to-top').removeClass('show');
      }
    });
  
    $('.scroll-to-top').click(function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 0}, 800);
    });
  });


  //desplazamiento suave con el menu principal
  
  // Para navegadores antiguos que no admiten el comportamiento de desplazamiento suave
  if ("scrollBehavior" in document.documentElement.style === false) {
    import("smoothscroll-polyfill").then((module) => {
      module.polyfill();
    });
  }

  $(document).ready(function() {
    // Agregar desplazamiento suave a los enlaces del menú
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });

