<!-- LOGOUT START -->
<?php
      session_start();
      unset($_SESSION['login_user']);
      header('Location:../index.php');
      
   ?>

<!-- LOGOUT END -->