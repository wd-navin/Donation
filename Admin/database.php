<?php 

    $server_name = "localhost" ;
    $username = "root";
    $password = "";
    $db_name = "ecommerce";

    $con = mysql_connect($server_name, $username, $password);

    if(!$con)
    {
        die('could not connect' . mysql_error());
    }

    mysql_select_db($db_name, $con);
?>