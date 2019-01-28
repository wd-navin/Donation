<!-- DELETE PART START -->

<?php include 'database.php' ;

       $id = $_GET['id'];
       //print_r($id);exit;
       if($_GET['type'] == 'users'){
          $sql = mysql_query("delete from  users where id = '$id'");
            header('Location:manage_users.php');
      }
      elseif($_GET['type'] == 'products'){
            $sql = mysql_query("delete from  products where id = '$id'");
            header('Location:manage_products.php');
      }
?>
<!-- DELETE PART END -->