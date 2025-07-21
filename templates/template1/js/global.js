// Fungsi untuk set top sidebar sesuai tinggi page-header
function setSidebarTop() {
   var header = document.querySelector('.page-header');
   var sidebar = document.querySelector('.sidebar');
   if (header && sidebar) {
      var headerHeight = header.offsetHeight;
      sidebar.style.top = headerHeight + 'px';
   }
   var columnSidebar = document.querySelector('.column-sidebar');
   if (header && columnSidebar) {
      var headerHeight = header.offsetHeight;
      columnSidebar.style.top = headerHeight + 'px';
   }
}
window.addEventListener('DOMContentLoaded', setSidebarTop);
window.addEventListener('resize', setSidebarTop);