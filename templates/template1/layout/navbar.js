document.writeln(`
<nav style="background-color: var(--bs-gray-200);" aria-label="navigation bar">
   <div class="container">
      <div id="menu" class="offcanvas-lg offcanvas-end" z-index="-1">
         <div class="offcanvas-header">
            <button class="btn-close rounded-0" data-bs-toggle="offcanvas" data-bs-target="#menu"></button>
         </div>
         <div class="offcanvas-body">
            <ul class="nav flex-column flex-lg-row justify-content-lg-center w-100 text-uppercase">
               <li class="nav-item">
                  <a href="#" class="nav-link px-0 px-lg-3 text-reset">
                     <b class="fw-medium">
                        product
                     </b>
                  </a>
               </li>
               <li class="nav-item py-2 d-none d-lg-inline"><div class="vr h-100"></div></li>
               <li class="nav-item">
                  <a href="#" class="nav-link px-0 px-lg-3 text-reset">
                     <b class="fw-medium">
                        machine & equipment
                     </b>
                  </a>
               </li>
               <li class="nav-item py-2 d-none d-lg-inline"><div class="vr h-100"></div></li>
               <li class="nav-item">
                  <a href="#" class="nav-link px-0 px-lg-3 text-reset">
                     <b class="fw-medium">
                        promo
                     </b>
                  </a>
               </li>
            </ul>
         </div>
         <div class="offcanvas-header justify-content-between gap-3 align-items-baseline">
            <div>
               <script src="layout/language.js"></script>
            </div>
            <div>
               <script src="layout/sosmed.js"></script>
            </div>
         </div>
      </div><!-- end menu -->
   </div><!-- end container -->
</nav>`)