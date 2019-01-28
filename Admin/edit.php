<?php include 'admin_layout_top.php';
      include 'controller.php';

$id = $_GET['id'];
//print_r($id);exit; 
if($_GET['type'] == 'users'){

   $sql = "SELECT * FROM users WHERE id= '$id'";
   $a = mysql_query($sql);
   $row = mysql_fetch_array($a);
//print_r($rows);exit;
?>
<div class="container">
   <div class="row">
      <div class="col-12">
         <div class="card my-5">
            <div class="card-header">USER EDIT DATA FORM</div>
            <div class="card-body ">
               <div class="register-form">
                    <form action="controller.php" method="post">
                        <div class="fields-grid">
                        <div class="styled-input">
                              <input type="hidden" placeholder="Your id" name="id" required="" value="<?php echo $row['id']; ?>">
                           </div>
                           <div class="styled-input">
                              <input type="text" placeholder="Your Name" name="name" required="" value="<?php echo $row['name']; ?>">
                           </div>
                           <div class="styled-input">
                              <input type="email" placeholder="Your Email" name="email" required="" value="<?php echo $row['email']; ?>">
                           </div>
                           <div class="styled-input">
                              <input type="text" placeholder="password" name="password" required="" value="<?php echo $row['password']; ?>">
                           </div>
                           <div class="styled-input">
                              <input type="text" placeholder="age" name="age" required="" value="<?php echo $row['age']; ?>">
                           </div>
                           <div class="styled-input">
                              <input type="text" placeholder="gender" name="gender" required="" value="<?php echo $row['gender']; ?>">
                           </div>
                           
                           <button type="submit" class="btn subscrib-btnn" name="sb">Save</button>
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

if($_GET['type'] == 'products'){

$sql = "SELECT * FROM products WHERE id= '$id'";
$a = mysql_query($sql);
$row = mysql_fetch_array($a);
//print_r($rows);exit;
?>
<div class="container">
<div class="row">
   <div class="col-12">
      <div class="card my-5">
         <div class="card-header">USER EDIT DATA FORM</div>
         <div class="card-body ">
            <div class="register-form">
                 <form action="controller.php" method="post">
                     <div class="fields-grid">
                     <div class="styled-input">
                           <input type="hidden" placeholder="Your id" name="id" required="" value="<?php echo $row['id']; ?>">
                        </div>
                        <div class="styled-input">
                           <input type="text" placeholder="Product Name" name="pro_name" required="" value="<?php echo $row['pro_name']; ?>">
                        </div>
                        <div class="styled-input">
                           <input type="text" placeholder="Product Image" name="pro_image" required="" value="<?php echo $row['pro_image']; ?>">
                        </div>
                        <div class="styled-input">
                           <input type="text" placeholder="Product Description" name="pro_description" required="" value="<?php echo $row['pro_description']; ?>">
                        </div>
                        <div class="styled-input">
                           <input type="text" placeholder="Price" name="price" required="" value="<?php echo $row['price']; ?>">
                        </div>
                       
                        
                        <button type="submit" class="btn subscrib-btnn" name="save">Save</button>
                     </div>
                  </form>
                  </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
<?php }  ?>

<?php include 'admin_layout_bottom.php'; ?>