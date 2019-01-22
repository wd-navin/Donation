<?php include 'database.php'; 
      include 'layout_top.php'; 
?>
<?php 
    $data = mysql_query("SELECT * FROM products" );
?>
<table class="table">
    <thead>
        <tr>
            <th>ID</th>
            <th>PRODUCT NAME</th>
            <th>PRODUCT IMAGE</th>
            <th>PRODUCT DESCRIPTION</th>
            <th>PRICE</th>
        </tr>
    </thead>
    <tbody>
        <?php while($row = mysql_fetch_array($data)) {
        ?>
    <tr>
        <td><?php echo $row['id']; ?></td>
        <td><?php echo $row['pro_name']; ?></td>
        <td><?php echo $row['pro_image']; ?></td>
        <td><?php echo $row['pro_description']; ?></td>
        <td><?php echo $row['price']; ?></td>    
    </tr>
        <?php } ?>
    </tbody>
</table>




<?php include 'layout_bottom.php'; ?>