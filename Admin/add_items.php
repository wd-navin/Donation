<?php include 'admin_layout_top.php'; 
       include 'add_controller.php'; 
        if($_GET['type'] == 'users') {
  ?>
<div class="container">
  <div class="row">
   <div class="col-12">
      <div class="card my-5">
         <div class="card-header">USERS ADD DATA FORM</div>
         <div class="card-body ">
            <div class="register-form">
                 <form action="add_controller.php" method="post">
                     <div class="fields-grid">
                     <div class="styled-input">
                           <input type="hidden" placeholder="Your id" name="id" required="" >
                        </div>                      
                        <div class="styled-input">
                           <input type="text" placeholder="Name" name="name" required="" >
                        </div>
                        <div class="styled-input">
                           <input type="text" placeholder="Email" name="email" required="" >
                        </div>
                        <div class="styled-input">
                           <input type="text" placeholder="Password" name="password" required="">
                        </div>
                        <div class="styled-input">
                           <input type="text" placeholder="Age" name="age" required="">
                        </div>
                        <div class="styled-input">
                           <input type="text" placeholder="Gender" name="gender" required="" >
                        </div>
                        <button type="submit" class="btn subscrib-btnn" name="submit">Add user</button>
                     </div>
                  </form>
                  </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>

        <?php } 
            if($_GET['type'] == 'products') {
        ?>

<div class="container">
<div class="row">
   <div class="col-12">
      <div class="card my-5">
         <div class="card-header">PRODUCTS ADD DATA FORM</div>
         <div class="card-body ">
            <div class="register-form">
                 <form action="add_controller.php" method="post">
                     <div class="fields-grid">
                        <div class="styled-input">
                           <input type="text" placeholder="Product Name" name="pro_name" required="">
                        </div>
                        <div class="styled-input">
                           <input type="text" placeholder="Product Image" name="pro_image" required="">
                        </div>
                        <div class="styled-input">
                           <input type="text" placeholder="Product Description" name="pro_description" required="">
                        </div>
                        <div class="styled-input">
                           <input type="text" placeholder="Price" name="price" required="">
                        </div>
                        <button type="submit" class="btn subscrib-btnn" name="save">Add Product</button>
                     </div>
                  </form>
                  </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>


        <?php } ?>
 <?php include 'admin_layout_bottom.php'; ?>