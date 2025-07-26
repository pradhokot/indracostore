document.writeln(`
<div class="dropdown">
   <button class="btn rounded-0 border-0 dropdown-toggle" data-bs-toggle="dropdown" data-bs-target="#dropdown-user">
      <i class="fas fa-user"></i><span class="visually-hidden">User</span>
   </button>
   <ul class="dropdown-menu dropdown-menu-end rounded-0" id="dropdown-user">
      <li>
         <a href="#" class="dropdown-item media">
            <span class="media-header"><i class="fas fa-user-plus"></i></span>
            <span class="media-body">Sign Up</span>
         </a>
      </li>
      <li>
         <a href="#" class="dropdown-item media">
            <span class="media-header"><i class="fas fa-user"></i></span>
            <span class="media-body">Sign In</span>
         </a>
      </li>
      <li>
         <a href="#" class="dropdown-item media">
            <span class="media-header"><i class="fas fa-user-xmark"></i></span>
            <span class="media-body">Sign Out</span>
         </a>
      </li>
      <li>
         <a href="#" class="dropdown-item media">
            <span class="media-header"><i class="fas fa-user"></i></span>
            <span class="media-body">Payment Confirmation</span>
         </a>
      </li>
   </ul>
</div>`)