<?php include 'database.php';?>

<!-- MAINNAV NAVBAR START -->
<nav class="navbar navbar-expand-lg sticky-top p-0" id="mainnav">
  <a href="#" class="navbar-brand">offer zone top deals & discounts</a>
  <div class="container-fluid">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mt-2 mt-lg-0 ">
    <li class="nav-item active">
      <a class="nav-link" href="#">
      <i class="fa fa-map-marker"></i>
      select location <span class="sr-only">(current)</span></a>
    </li>
         
    <li class="nav-item">
       <a class="nav-link" href="#">
      <i class="fa fa-truck"></i>
      track order</a>
    </li> 
    <li class="nav-item">
      <a class="nav-link" href="#">
      <i class="fa fa-phone"></i>
      001 334345535</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="modal.php" data-toggle="modal" data-target="#exampleModalLoginLong">
        <i class="fa fa-sign-in"></i>
        Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="modal.php" data-toggle="modal" data-target="#exampleModalLong">
        <i class="fa fa-sign-out"></i>
        Register</a>
      </li> 
    </ul>
		  </div>
  </div>
</nav>
<!-- MAINNAV NAVBAR END -->

<!-- SECOND NAVBAR START -->

	<nav class="navbar navbar-expand-lg sticky-top" id="nav_bar">
  <div class="container-fluid">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mt-2 mt-lg-0 mx-auto">
      <li class="nav-item active">
        <a class="nav-link" href="index.php">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="products.php">Products</a>
      </li> 
      <li class="nav-item">
        <a class="nav-link" href="#">About Us</a>
      </li> 
      <li class="nav-item">
        <a class="nav-link" href="blog.php">Blogs</a>
      </li> 
      <li class="nav-item">
        <a class="nav-link" href="#">Contacts Us</a>
      </li> 
      <li class="nav-item">
        <a class="nav-link" href="#">Services</a>
      </li>
      
    </ul>
		<div id="wrap">
  							<form action="" autocomplete="on">
                <input class="search_bar" id="search" name="search" type="text" placeholder="Search...">
      				 </form>
 		</div>
    </div>
  </div>
</nav>
<!-- SECOND NAVBAR END -->