<?php include 'function.php'; ?>
<!-- Login modal start -->
<div class="modal fade" id="exampleModalLoginLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Login</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
			<div class="register-form">
                     <form action="function.php" method="post">
                        <div class="fields-grid">
                           <div class="styled-input">
                              <input type="text" placeholder="Your Name" name="name" required="">
                           </div>
                           <div class="styled-input">
                              <input type="email" placeholder="Your Email" name="email" required="">
                           </div>
                           <div class="styled-input">
                              <input type="password" placeholder="password" name="password" required="">
                           </div>
                           <button type="submit" class="btn btn-default" name="submit">Submit</button>
                        </div>
                     </form>
                  </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      
      </div>
    </div>
  </div>
</div>
<!-- Login modal end -->

<!-- SIGNUP MODAL START -->
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Sign up</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
			<div class="register-form">
                     <form action="function.php" method="post">
                        <div class="fields-grid">
                           <div class="styled-input">
                              <input type="text" placeholder="Your Name" name="name" required="">
                           </div>
                           <div class="styled-input">
                              <input type="email" placeholder="Your Email" name="email" required="">
                           </div>
                           <div class="styled-input">
                              <input type="password" placeholder="password" name="password" required="">
													 </div>
													 <div class="styled-input">
                              <input type="text" placeholder="Your Age" name="age" required="">
                           </div>
                           <div class="styled-input">
                              <input type="text" placeholder="Your Gender" name="gender" required="">
                           </div>
                           <button type="submit" class="btn btn-default" name="save">Submit</button>
                        </div>
                     </form>
                  </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       <!-- <button type="button" class="btn btn-primary">Save changes</button>-->
      </div>
    </div>
  </div>
</div>

<!-- SIGNUP MODAL END -->

