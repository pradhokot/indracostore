$(document).ready(function () {

   // set height column sidebar
   /* var headerHeight = $('body > header').outerHeight();
   $('.sticky-sidebar').css('top', headerHeight + 'px'); */

   // Auto refresh jika lebar window melewati batas 992px
   let lastWindowWidth = $(window).width();
   $(window).resize(function () {
      const currentWidth = $(window).width();
      if ((lastWindowWidth < 992 && currentWidth >= 992) || (lastWindowWidth >= 992 && currentWidth < 992)) {
         location.reload();
      }
      lastWindowWidth = currentWidth;
   });

   $('#menu').on('shown.bs.offcanvas', function() {
      $('.menu-toggler').addClass('show');
   });
   $('#menu').on('hidden.bs.offcanvas', function() {
      $('.menu-toggler').removeClass('show');
   });

})