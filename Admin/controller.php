<?php include 'database.php'; ?>
<!-- EDIT USERS DATA QUERY START -->
<?php

    if (isset($_POST['sb'])) {

         $id =$_POST['id'];
         $name = $_POST['name'];
         $email = $_POST['email'];
         $password = $_POST['password'];
         $age = $_POST['age'];
         $gender = $_POST['gender'];
        //print_r($name);exit;
        
      $sql = mysql_query("update users set name = '$name', email='$email', password = '$password', age ='$age', gender='$gender' WHERE id = '$id'");
      header('Location:manage_users.php');
        
        $retval = mysql_query( $sql, $con);
        
        
        if(! $retval ) {
           die('Could not update data: ' . mysql_error());
        }
        echo "Updated data successfully\n";

    }
?>
<!-- EDIT USERS DATA QUERY END -->

<!-- EDIT PRODUCTS DATA QUERY START -->

<?php

    if (isset($_POST['save'])) {
        
         $id =$_POST['id'];
         $name = $_POST['pro_name'];
         $image = $_POST['pro_image'];
         $desc = $_POST['pro_description'];
         $price = $_POST['price'];
        //print_r($name);exit;
        
      $sql = mysql_query("update products set pro_name = '$name', pro_image='$image', pro_description = '$desc', price ='$price' WHERE id = '$id'");
      header('Location:manage_products.php');
        
        $retval = mysql_query( $sql, $con);
        
        
        if(! $retval ) {
           die('Could not update data: ' . mysql_error());
        }
        echo "Updated data successfully\n";

    }
?>

<!-- EDIT PRODUCTS DATA QUERY END -->

