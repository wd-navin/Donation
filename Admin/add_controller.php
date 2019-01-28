<?php include 'database.php'; ?>
<!-- ADD USERS QUERY START -->
<?php
     if(isset($_POST['submit'])) {
         $name = $_POST['name'];
         $email = $_POST['email'];
         $password = $_POST['password'];
         $age = $_POST['age'];
         $gender = $_POST['gender'];
         //print_r($name);exit;
        $sql =mysql_query("insert into users(name, email, password, age, gender )
                values('$name', '$email', '$password', '$age', '$gender')
        ");
        header('Location:manage_users.php');
    }
?>
<!-- ADD USERS QUERY END -->

<!-- ADD PRODUCTS QUERY START -->
<?php
     if(isset($_POST['save'])) {
         $name = $_POST['pro_name'];
         $image = $_POST['pro_image'];
         $desc = $_POST['pro_description'];
         $price = $_POST['price'];
         //print_r($name);exit;
        $sql =mysql_query("insert into products(pro_name, pro_image, pro_description, price)
                values('$name', '$image', '$desc', '$price')
        ");
        header('Location:manage_products.php');
    }
?>

<!-- ADD PRODUCTS QUERY END -->