$(document).ready(function () {

   // set height column sidebar
   var headerHeight = $('body > header').outerHeight();
   $('.column-sidebar').css('top', headerHeight + 'px');

   // layering when offcanvas active
   $('#menu').on('shown.bs.offcanvas', function () {
      $('body > header').addClass('z-3');
   });
   $('#menu').on('hidden.bs.offcanvas', function () {
      $('body > header').removeClass('z-3');
   });
   
   /* $('#sidebar').on('shown.bs.offcanvas', function () {
      $('body > main').addClass('z-3');
   });
   $('#sidebar').on('hidden.bs.offcanvas', function () {
      $('body > main').removeClass('z-3');
   }); */

})