<?php
		$con = mysql_connect("localhost", "root", "", "ecommerce");

		if (!$con) {
			die('could not connect:' . mysql_error());
		}
		mysql_select_db("ecommerce", $con);
	?>