document.writeln(`
<header class="bg-body" aria-label="page header">
   <div class="container d-flex align-items-center gap-4 py-3">
      <h1 class="my-0 me-auto lh-base">
         <a href="index.html" class="text-reset text-decoration-none d-flex">
            <img src="../../assets/img/logo-indracostore.svg" alt="INDRACOSTORE" class="brand-img" width="100%" height="auto" style="max-width: 17rem;">
         </a>
      </h1>
      <ul class="nav flex-nowrap align-items-center gap-4">
         <li class="nav-item d-none d-lg-block">
            <script src="layout/language.js"></script>
         </li>
         <li class="nav-item">
            <a href="#" class="nav-link text-reset p-0">
               <i class="fas fa-user fa-lg"></i>
            </a>
         </li>
         <li class="nav-item position-relative">
            <a href="#" class="nav-link text-reset p-0">
               <i class="fas fa-shopping-cart fa-lg"></i>
            </a>
            <div class="badge-cart position-absolute top-0 start-100 translate-middle">
               <div class="position-realtive rounded-circle bg-primary d-flex justify-content-center align-items-center" style="padding: .625rem; outline: solid 1px var(--bs-body-bg);">
                  <div class="position-absolute top-50 start-50 translate-middle text-center text-white small">
                     <span><b class="fw-medium">4</b></span>
                  </div>
               </div>
            </div>
         </li>
      </ul>
      <button class="menu-toggler d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#menu">
         <span></span>
         <span></span>
         <span></span>
      </button>
   </div><!-- end container -->
</header>`)