

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

