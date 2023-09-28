(function ($) {

    // Initiate the wowjs
    new WOW().init();

      // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-150px');
        }
    });

      // Dropdown on mouse hover
      const $dropdown = $(".dropdown");
      const $dropdownToggle = $(".dropdown-toggle");
      const $dropdownMenu = $(".dropdown-menu");
      const showClass = "show";
      
      $(window).on("load resize", function() {
          if (this.matchMedia("(min-width: 992px)").matches) {
              $dropdown.hover(
              function() {
                  const $this = $(this);
                  $this.addClass(showClass);
                  $this.find($dropdownToggle).attr("aria-expanded", "true");
                  $this.find($dropdownMenu).addClass(showClass);
              },
              function() {
                  const $this = $(this);
                  $this.removeClass(showClass);
                  $this.find($dropdownToggle).attr("aria-expanded", "false");
                  $this.find($dropdownMenu).removeClass(showClass);
              }
              );
          } else {
              $dropdown.off("mouseenter mouseleave");
          }
      });
      /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });
/**
   * Porfolio isotope and filter
   */
let portfolionIsotope = document.querySelector('.portfolio-isotope');

if (portfolionIsotope) {

  let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolionIsotope.getAttribute('data-portfolio-filter') : '*';
  let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolionIsotope.getAttribute('data-portfolio-layout') : 'masonry';
  let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolionIsotope.getAttribute('data-portfolio-sort') : 'original-order';

  window.addEventListener('load', () => {
    let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
      itemSelector: '.portfolio-item',
      layoutMode: portfolioLayout,
      filter: portfolioFilter,
      sortBy: portfolioSort
    });

    let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
    menuFilters.forEach(function(el) {
      el.addEventListener('click', function() {
        document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aos_init === 'function') {
          aos_init();
        }
      }, false);
    });

  });

}

let previousTitle = document.title
window.addEventListener('blur', () =>{
  previousTitle = document.title
  document.title = '¡No te vayas! ¡Vuelve! 😀' 
})
window.addEventListener('focus', () =>{
  document.title = previousTitle
});

// Testimonials carousel
$(".testimonial-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1000,
  margin: 15,
  loop: true,
  center: true,
  dots: false,
  nav: true,
  navText : [
    '<i class="bi bi-chevron-left"></i>',
    '<i class="bi bi-chevron-right"></i>'
  ],
  responsive: {
      0:{
          items:1
      },
      /*576:{
          items:1
      },*/
      768:{
          items:2
      },
      992:{
          items:3
      }
  }
});
 // Back to top button
 $(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
  } else {
      $('.back-to-top').fadeOut('slow');
  }
});
$('.back-to-top').click(function () {
  $('html, body').animate({scrollTop: 0}, 200, 'easeInOutExpo');
  return false;
});
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

})(jQuery);