<?php include 'admin_layout_top.php'; ?>

<?php include 'database.php'; 

     $data= mysql_query("select * from products");

?>

 <!-- table danger start -->
                    <div class="col-12 mt-5">
                        <div class="card">
                            <div class="card-body">
                            <div class="d-flex">
                                <h4 class="header-title">SIGNUP EDIT FORM</h4>
                                <button type="button" class="btn btn-sm btn-danger ml-auto" style="padding: 1px 11px; margin-bottom:1rem">
                                    <a name="add" href="add_items.php? &type=products" class="text-white">
                                        Add <i class="fa fa-plus"></i> 
                                    </a>
                                </button>
                                </div>
                                <div class="single-table">
                                    <div class="table-responsive">
                                        <table class="table text-center">
                                            <thead class="text-uppercase bg-danger">
                                                
                                                <tr class="text-white">
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Product Name</th>
                                                    <th scope="col">Product Image</th>
                                                    <th scope="col">Product Description</th>
                                                    <th scope="col">Product Price</th>
                                                    <th scope="col">Action</th>
                                                    
                                                </tr>
                                                
                                            </thead>
                                            <tbody>
                                            <?php while($row = mysql_fetch_array($data)) { ?>
                                                
                                               <tr>
                                                    <th scope="row">
                                                        <?php echo $row['id']; ?>
                                                    </th>
                                                    <td><?php echo $row['pro_name']; ?></td>
                                                    <td><?php echo $row['pro_image']; ?></td>
                                                    <td><?php echo $row['pro_description']; ?></td>
                                                    <td><?php echo $row['price']; ?></td>
                                                    <td>
                                                    <ul class="d-flex justify-content-center">
                                                            <li class="mr-3">
                                                                <a name="edit" href="edit.php?id=<?php echo $row['id']; ?>&type=products" class="text-secondary" >
                                                                     <i class="fa fa-edit"></i>
                                                                </a>
                                                            </li>
                                                            <li><a name="delete" href="delete.php?id=<?php echo $row['id']; ?>&type=products" class="text-danger">
                                                                <i class="ti-trash"></i></a>
                                                            </li>                                                           
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <?php } ?>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
 <!-- table danger end -->
 <?php include 'admin_layout_bottom.php'; ?>