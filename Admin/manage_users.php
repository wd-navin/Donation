<?php include 'admin_layout_top.php'; 
      include 'database.php'; 
      
  $data = mysql_query("select * from users");

?>
<!-- Progress Table start -->
 <div class="col-12 mt-5">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex">
                                <h4 class="header-title">Users Table</h4>
                                <button type="button" class="btn btn-sm btn-danger ml-auto" style="padding: 1px 11px; margin-bottom:1rem">
                                    <a name="add" href="add_items.php? &type=users" class="text-white">
                                        Add <i class="fa fa-plus"></i>
                                    </a>
                                </button>
                                </div>
                              
                                                        
                                <div class="single-table">
                                    <div class="table-responsive">
                                        <table class="table table-hover progress-table text-center">
                                            <thead class="text-uppercase">
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Password</th>
                                                    <th scope="col">Age</th>
                                                    <th scope="col">Gender</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <?php while($row = mysql_fetch_array($data)) { ?>
                                                <tr>
                                                    <th scope="row">
                                                        <?php echo $row['id']; ?>
                                                    </th>
                                                    <td>
                                                    <?php echo $row['name']; ?>
                                                    </td>
                                                    <td>
                                                    <?php echo $row['email']; ?>
                                                    </td>
                                                    <td>
                                                    <?php echo $row['password']; ?>
                                                    </td>
                                                    <td>
                                                    <?php echo $row['age']; ?>
                                                    </td>
                                                    <td>
                                                    <?php echo $row['gender']; ?>
                                                    </td>
                                                    <td>
                                                        <ul class="d-flex justify-content-center">
                                                            <li class="mr-3">
                                                                
                                                                <a name="edit" href="edit.php?id=<?php echo $row['id']; ?>&type=users" class="text-secondary" >
                                                                <i class="fa fa-edit"></i></a>
                                                            </li>

                                                            <li>
                                                                <a name="delete" href="delete.php?id=<?php echo $row['id']; ?>&type=users" class="text-danger" >
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
                    <!-- Progress Table end -->

    <?php include 'admin_layout_bottom.php'; ?>