document.writeln(`
<div id="homeBanner" class="carousel slide carousel-fade mb-4 mb-md-5 text-bg-dark" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="false">
   <div class="carousel-inner">
      <div class="carousel-item active">
         <img src="../../assets/img/home-banner-mobile-rs.jpg" alt="" class="banner-mobile object-fit-cover w-100 h-100 d-md-none">
         <img src="../../assets/img/home-banner-desktop-rs.jpg" alt="" class="banner-desktop object-fit-cover w-100 h-100 d-none d-md-inline">
      </div>
      <div class="carousel-item">
         <img src="../../assets/img/home-banner-mobile-tb.jpg" alt="" class="banner-mobile object-fit-cover w-100 h-100 d-md-none">
         <img src="../../assets/img/home-banner-desktop-tb.jpg" alt="" class="banner-desktop object-fit-cover w-100 h-100 d-none d-md-inline">
      </div>
      <div class="carousel-item">
         <img src="../../assets/img/home-banner-mobile-ue.jpg" alt="" class="banner-mobile object-fit-cover w-100 h-100 d-md-none">
         <img src="../../assets/img/home-banner-desktop-ue.jpg" alt="" class="banner-desktop object-fit-cover w-100 h-100 d-none d-md-inline">
      </div>
   </div>
   <div class="carousel-indicators position-relative m-0">
      <button type="button" data-bs-target="#homeBanner" data-bs-slide-to="0" class="border-0 m-0 w-100 pt-1 active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#homeBanner" data-bs-slide-to="1" class="border-0 m-0 w-100 pt-1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#homeBanner" data-bs-slide-to="2" class="border-0 m-0 w-100 pt-1" aria-label="Slide 3"></button>
   </div>
   <button class="carousel-control carousel-control-prev" type="button" data-bs-target="#homeBanner" data-bs-slide="prev">
      <div class="text-bg-light p-3">
         <i class="fas fa-chevron-left fa-2x"></i>
      </div>
   </button>
   <button class="carousel-control carousel-control-next" type="button" data-bs-target="#homeBanner" data-bs-slide="next">
      <div class="text-bg-light p-3">
         <i class="fas fa-chevron-right fa-2x"></i>
      </div>
   </button>
</div><!-- end home banner -->`)