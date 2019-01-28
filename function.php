<?php include 'database.php' ; ?>
<!-- LOGIN START -->
<?php
//print_r( $_REQUEST);exit;
$error=''; // Variable To Store Error Message
if (isset($_POST['submit'])) {
if (empty($_POST['email']) || empty($_POST['password'])) {
$error = "Username or Password is invalid";
}
else
{
// Define $username and $password
$username=$_POST['email'];
$password=$_POST['password'];
$username = stripslashes($username);
$password = stripslashes($password);
$username = mysql_real_escape_string($username);
$password = mysql_real_escape_string($password);

// SQL query to fetch information of registerd users and finds user match.
$query = mysql_query("select * from users where password='$password' AND email='$username'", $con);
$rows = mysql_num_rows($query);
if ($rows == 1) {
$_SESSION['login_user']=$username; // Initializing Session
header("location:Admin/dashboard.php"); // Redirecting To Other Page
} else {
$error = "Username or Password is invalid";
}
mysql_close($con); // Closing connection
}
}
?>
<!-- LOGIN END -->

<!-- SIGNUP START -->
 <?php

     if(isset($_POST['save'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $age = $_POST['age'];
        $gender = $_POST['gender'];

        

        $sql = mysql_query("insert into users(name, email, password, age, gender)
        VALUES('$name', '$email', '$password', ' $age', ' $gender')
        ");
        
        $result = mysql_query($sql, $con);

       // if(mysql_num_rows($result) == 1){
         //   echo "pass";
            header("location:Admin/dashboard.php");
        //}
        //else{
          //  echo "fail";
        //}
        	           
    }

    ?>
<!-- SIGNUP END -->



