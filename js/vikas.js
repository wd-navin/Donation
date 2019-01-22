$(document).on('click', '.next a', function (e) {
    $.ajax({
        type: "POST",
        url: $(this).attr('href'),
        dataType: 'json',
        success: function (data) {

            //$('#pagi').remove();
            $('.more-items').append(data.data);
            $('#pagination').html(data.pagination);
            //$('#sorting-table').html(data.sort_p);
        }
    });
    var pageurl = $(this).attr('href');
    if (pageurl != window.location) {
        // window.history.pushState({path: pageurl}, '', pageurl);
    }
    e.preventDefault();
    return false;
});


//////////////////////////////////
jQuery(document).ready(function () {
    /////////////////////////////////////////Edit Submit lookbook
    $('.btn-folio-name2').on('click', function () {
        var val = $('#lookbookname').val();
        var folio_id = $('.edit-folio-id').html();
        var arr = [];
        $(".drop").children('.col-sm-4').each(function (n, i) {
            arr.push($(this).find('.item_id').html())
        });
        var url = webURL + "users/updatelookbook";
        $.ajax({
            type: "POST",
            url: url,
            data: {title: val, items_id: arr, folio_id: folio_id},
            // dataType: 'json',
            context: this,
            success: function (data)
            {
                //console.info(data); // show response from the php script.
                window.location.href = webURL + "users/mylookbook";
            }
        });
    });

    ///////////////////////////////////////////// Submit Lookbook
    $('.submit-folios').on('click', function () {
        var folio_id = $(this).attr('rel');
        var contest_id = $('.contest-id').html();
        var url = webURL + "users/saveContestEntries"; // the script where you handle the form input.
        $.ajax({
            type: "POST",
            url: url,
            data: {folio_id: folio_id, contest_id: contest_id}, // serializes the form's elements.
            dataType: 'json',
            context: this,
            success: function (data)
            {
                if (data.status == 'success') {
                    //  alert( data.msg)
                    swal("", data.msg, );
                } else {
                    swal("", data.msg, );
                    // alert( data.msg)
                }
            }
        });
    });
    ///////////////////////////////////////////// Designer Followers popup
    $('.show-followers').on('click', function () {
        var designer_id = $(this).attr('rel');
        var url = webURL + "users/designerfollowers"; // the script where you handle the form input.
        $.ajax({
            type: "POST",
            url: url,
            data: {designer_id: designer_id}, // serializes the form's elements.
            // dataType: 'json',
            context: this,
            success: function (data)
            {
                $('#desginer_user').modal('show');
                $('.desginermodal').html(data);
            }
        });
    });


    ///////////////////////////////////////////// Save created Lookbook and Drag and Drop LookBook Ajax


    $(".origin").draggable({
        // cursor: "move",
        revert: "invalid",
        helper: "clone",
    });

    $('.remove-drag').click(function () {
        $(this).parent('.col-sm-4').remove();
    });

    $(".drop").droppable({
        accept: '.origin',
        // hoverClass: "ui-state-active",
        drop: function (ev, ui) {
            if ($(ui.draggable).hasClass('new')) {
                $('.new').draggable({
                    revert: true,
                });
                $(".drop , div").disableSelection();
            } else {
                $(this).append($(ui.draggable).clone().draggable({
                    helper: "original",
                }).addClass('new'));
                $('.remove-watermark').remove();
                $('.new').children(".remove-drag").css('opacity', '1');
                $('.new').children('.remove-drag').on('click', function () {
                    // $(this).parents('.col-sm-4').fadeOut(1000, function () {
                    $(this).parent('.col-sm-4').remove();
                    // });
                });
            }

        },
        out: function (event, ui) {
            $(ui.draggable).fadeOut(1000, function () {
                $(this).remove();
            });
        },
    });
    $('.btn-folio-name').on('click', function () {
        var val = $('#lookbookname').val();
        var arr = [];
        $(".drop").children('.col-sm-4').each(function (n, i) {
            arr.push($(this).find('.item_id').html())
        });

        var url = webURL + "users/createFolio";
        $.ajax({
            type: "POST",
            url: url,
            data: {title: val, items_id: arr},
            // dataType: 'json',
            context: this,
            success: function (data)
            {
                console.info(data);
                window.location.href = webURL + "users/mylookbook";

            }
        });
    });
    /////////////////////////////////// Login Ajax
    $('.login-signup-btn').on('click', function () {
        $('#LoginPopup').modal('hide');
        setTimeout(function () {
            $('#SignupPopup').modal('show');
        }, 350);
    });
    $('.login-lookbook').on("click", function () {
        $('.lookbook_type').val($(this).attr('rel'));
    });


    $("#frmLogin").submit(function (e) {
        var url = webURL + "users/ajax_login";
        // alert(url); return false;
        var type = $(this).attr('data-id');
        $.ajax({
            type: "POST",
            url: url,
            data: $("#frmLogin").serialize(),
            dataType: 'json',
            context: this,
            success: function (data)
            {
                console.info(data);
                if (data.status == 'success') {
                    if (data.message == 1) {

                        window.location.href = webURL + "users/createlookbook";
                    } else {

                        window.location.href = "";
                    }

                } else {
                    //swal("", "That email address and password combination is not correct.", "error");
                    $('.invalid-msg').show();
                    $('.h5-invalid-msg').css('margin-bottom', '5px');
                    $('.h5-invalid-msg').css('margin-top', '5px');
                    $('.join-h3-margin').css('margin-top', '15px');
                }
            }
        });
        e.preventDefault(); // avoid to execute the actual submit of the form.
    });
    /////////////////////////////////////////Register user Ajax
    $("#createuser").submit(function (e) {
        var url = webURL + "users/registerUser";
        $.ajax({
            type: "POST",
            url: url,
            data: $("#createuser").serialize(),
            dataType: 'json',
            context: this,
            success: function (data)
            {
                console.info(data);
                if (data.status == 'success') {
                    window.location.href = "";
                } else {
                    //swal("", "That email address already in Fashwire.", "warning");
                    $('.invalid-msg2').show();
                    test = $('#UserEmail').val();
                    document.getElementById('print-email').innerHTML = test;

                }
            }
        });
        e.preventDefault(); // avoid to execute the actual submit of the form.
    });
    ////////////////////////////Check Login Ajax
    $('.checkLogin').on('click', function () {
        var url = webURL + "users/checkLogin";
        $.ajax({
            type: "POST",
            url: url,
            data: {}, // serializes the form's elements.
            dataType: 'json',
            context: this,
            success: function (data)
            {
                console.info(data); // show response from the php script.
                if (data.status == 'success') {
                    window.location.href = webURL + "users/mylookbook";
                } else {
                    $('#LoginPopup').modal('show');
                }
            }
        });
    });

/////////////////////////////////////////Item Comment Ajax
    $('.comment-tag').on('click', function () {
        var comment_text = $('.comment-input').val();
        var id = $(this).attr('rel');
        var date = new Date() / 1000;
        var obj = date.toString();
        if (comment_text.length === 0) {
            alert('please enter');
            return false;
        } else {
            var url = webURL + "users/addCommentForItem";
        }
        $.ajax({
            type: "POST",
            url: url,
            data: {item_id: id, comment: comment_text, timestamp: obj}, // serializes the form's elements.
            dataType: 'json',
            context: this,
            success: function (data)
            {
                console.info(data); // show response from the php script.
                if (data.status == 'success') {
                    $('.GetAllComment').prepend('<div class="whole-comment-box"> <img class="User-two-image" src="' + data.data.profile_pic + '"><div class="user-comment-box"><a class="User1-name" href="#">' + data.data.name + '</a><br><a class="User1-comment">' + data.data.comment + '</a></div></div>');
                    $('.comment-input').val('')
                } else {
                    $('#LoginPopup').modal('show');
                }
            }
        });
    });
    //////////////////////////////Remove User LookBook Ajax
    $('.delete-lookbook').on('click', function () {
        var folio_id = $(this).attr('rel');

        var url = webURL + "users/deletelookbook";
        $.ajax({
            type: "POST",
            url: url,
            data: {folio_id: folio_id}, // serializes the form's elements.
            dataType: 'json',
            context: this,
            success: function (data)
            {
                console.info(data); // show response from the php script.
                if (data.status == 'success') {
                    $(this).parents('.remove-lookbook').remove();
                } else {
                    // $('#LoginPopup').modal('show');
                }
            }
        });
    });

    ////////////////////////////////Designer Follow Ajax
    $('.designer-follow-btn').on('click', function () {
        var obj = $(this).attr('rel');
        var url = webURL + "users/addremovefolloweruser/" + obj;
        $.ajax({
            type: "POST",
            url: url,
            data: {},
            dataType: 'json',
            context: this,
            success: function (data)
            {
                if (data.status == 'success') {
                    $(this).html(data.msg);
                    $('.follower-value').html(data.total_follower);
                } else {
                }
            }
        });
    });

    //////////////////////////////////////////////////////Designer like dislike Ajax
    $('.heart-icon-designer').on('click', function () {
        var designer_id = $(this).attr('rel');
        var url = webURL + "users/addremovefavoritedesigner/" + designer_id;
        $.ajax({
            type: "POST",
            url: url,
            data: {}, // serializes the form's elements.
            dataType: 'json',
            context: this,
            success: function (data)
            {
                if (data.status == 'success') {
                    if (data.remove == 1) {
                        $(this).find('.click-heart').removeClass('fa-heart-o');
                        $(this).find('.click-heart').addClass('fa-heart');
                        $(this).find('.fa-heart').css('color', '#000');
                    } else {
                        $(this).find('.click-heart').removeClass('fa-heart');
                        $(this).find('.click-heart').addClass('fa-heart-o');
                        $(this).find('.fa-heart-o').css('color', '#000');
                    }
                } else {
                }
            }
        });
    });
    //////////////////////////////////////////////////////Designer LookBook Heart Like
    $('.heart-icon-folios').on('click', function () {
        var folios_id = $(this).attr('rel');
        var url = webURL + "users/addRemoveFavoriteFolio/" + folios_id;
        $.ajax({
            type: "POST",
            url: url,
            data: {}, // serializes the form's elements.
            dataType: 'json',
            context: this,
            success: function (data)
            {
                if (data.status == 'success') {
                    if (data.folio_remove == 1) {
                        $(this).find('.click-heart').removeClass('fa-heart-o');
                        $(this).find('.click-heart').addClass('fa-heart');
                        $(this).find('.fa-heart').css('color', '#000');
                    } else {
                        $(this).find('.click-heart').removeClass('fa-heart');
                        $(this).find('.click-heart').addClass('fa-heart-o');
                        $(this).find('.fa-heart-o').css('color', '#000');
                    }
                } else {
                }
            }
        });
    });

    ///////////////////////////////
    $('.heart-icon-folios-2').on('click', function () {
        var folios_id = $(this).attr('rel');
        var url = webURL + "users/addRemoveFavoriteFolio/" + folios_id;
        $.ajax({
            type: "POST",
            url: url,
            data: {}, // serializes the form's elements.
            dataType: 'json',
            context: this,
            success: function (data)
            {
                // console.info(data); // show response from the php script.
                if (data.status == 'success') {

                    if (data.folio_remove == 1) {
                    } else {
                        $(this).parents('.lookbook-container').remove();
                    }
                } else {
                }
            }
        });
    });
    //////////////////////////////////////////////////////Item Like Ajax
    $('.heart-icon-item').on('click', function () {
        var item_id = $(this).attr('rel');
        var url = webURL + "users/addRemoveFavoriteItem/" + item_id;
        $.ajax({
            type: "POST",
            url: url,
            data: {}, // serializes the form's elements.
            dataType: 'json',
            context: this,
            success: function (data)
            {
                // console.info(data); // show response from the php script.
                if (data.status == 'success') {
                    if (data.item_remove == 1) {
                        $(this).find('.click-heart').removeClass('fa-heart-o');
                        $(this).find('.click-heart').addClass('fa-heart');
                        $(this).find('.fa-heart').css('color', '#000');
                    } else {
                        $(this).find('.click-heart').removeClass('fa-heart');
                        $(this).find('.click-heart').addClass('fa-heart-o');
                        $(this).find('.fa-heart-o').css('color', '#000');
                    }
                } else {
                }
            }
        });
    });
    //////////////////////////////////////////////////////
    $('.heart-icon-item-2').on('click', function () {
        var item_id = $(this).attr('rel');
        var url = webURL + "users/addRemoveFavoriteItem/" + item_id;
        $.ajax({
            type: "POST",
            url: url,
            data: {}, // serializes the form's elements.
            dataType: 'json',
            context: this,
            success: function (data)
            {
                // console.info(data); // show response from the php script.
                if (data.status == 'success') {
                    if (data.item_remove == 1) {
                    } else {
                        $(this).parents('.col-sm-3').remove();
                    }
                } else {
                }
            }
        });
    });
    ////////////////////////////////////////////////////
    $('.heart-icon-designer2').on('click', function () {
        var designer_id = $(this).attr('rel');
        var url = webURL + "users/removefavoritedesigner/" + designer_id;
        $.ajax({
            type: "POST",
            url: url,
            data: {}, // serializes the form's elements.
            dataType: 'json',
            context: this,
            success: function (data)
            {
                // console.info(data); // show response from the php script.
                if (data.status == 'success') {

                    if (data.parent_remove == 1) {
                        $(this).parents('.col-md-3').remove();
                    } else {
                    }
                } else {
                }
            }
        });
    });


    ////////////////////////////////search designer
    $('.filter-check-box').on('change', function () {
        $('#radio1').prop('checked', false);
        $('#radio2').prop('checked', false);
        $('.loading').show();
        var checkValues = $('input:checkbox:checked').map(function ()
        {
            return $(this).val();
        }).get();

        if (checkValues == '') {
            $('.loading').show();
            $('#item-data').hide();
            setTimeout(function () {
                window.location.href = "";
            }, 800);
        } else {
            var url = webURL + "users/searchitembydesigner/";
        }
        $.ajax({
            type: "POST",
            url: url,
            data: {isd: checkValues}, // serializes the form's elements.
            //dataType: 'json',
            context: this,
            success: function (data)
            {
                console.info(data); // show response from the php script.
                $('#LoadAllItems').html(data);
                $('.hide-pagination').hide();
                $('.loading').hide();
            }
        });
    });
    ///////////////////////////////////////////////////////
    /*  $('.lookbook-check-box').on('change', function () {
     var checkVal = $('input:checkbox:checked').map(function ()
     {
     return $(this).val();
     }).get();
     var url = webURL + "users/designerfolios/";
     $.ajax({
     type: "POST",
     url: url,
     data: {cal: checkVal}, // serializes the form's elements.
     // dataType: 'json',
     context: this,
     success: function (data)
     {
     console.info(data); // show response from the php script.
     $('#item-data').html(data);
     // $('.hide-pagination').hide();
     }
     });
     });*/
    //////////////////////////////////////////////////////search designer end and most populer start
    $('#radio1').on('click', function () {
        location.reload();
    });
    $('#radio2').on('click', function () {
        $('.filter-check-box').prop('checked', false);
        $('.loading').show();
        var url = webURL + "users/searchpopularitem/";
        $.ajax({
            type: "POST",
            url: url,
            data: {}, // serializes the form's elements.
            // dataType: 'json',
            context: this,
            success: function (data)
            {
                console.info(data); // show response from the php script.
                $('#LoadAllItems').html(data);
                $('.hide-pagination').hide();
                $('.loading').hide();
            }
        });
    });

    ///////////////////////////////////////////////////
    $('#radio3').on('click', function () {
        $('.filter-check-box').prop('checked', false);
        $('.loading').show();
        var url = webURL + "users/searchajaxcollection/";
        $.ajax({
            type: "POST",
            url: url,
            data: {}, // serializes the form's elements.
            // dataType: 'json',
            context: this,
//            beforeSend: function() {
//              $("#loading-image").show();
//           },
            success: function (data)
            {
                //console.info(data); // show response from the php script.
                $('#LoadAllItems').html(data);
                $('.hide-pagination').hide();
                $('.loading').hide();

            }
        });
    });
    $('#radio4').on('click', function () {
        $('.filter-check-box').prop('checked', false);
        $('.loading').show();
        var url = webURL + "users/searchajaxallcollection/";
        $.ajax({
            type: "POST",
            url: url,
            data: {}, // serializes the form's elements.
            // dataType: 'json',
            context: this,
//            beforeSend: function() {
//              $("#loading-image").show();
//           },
            success: function (data)
            {
                //console.info(data); // show response from the php script.
                $('#LoadAllItems').html(data);
                $('.hide-pagination').hide();
                $('.loading').hide();

            }
        });
    });

    ////////////////////////////////////////////////////////
    $('#radio-men').on('click', function () {
        $('.loading').show();
        $('.filter-check-box').prop('checked', false);
        var url = webURL + "users/searchmenitem/";
        $.ajax({
            type: "POST",
            url: url,
            data: {},
            context: this,
            success: function (data)
            {
                $('#LoadAllItems').html(data);
                $('.hide-pagination').hide();
                $('.loading').hide();
            }
        });
    });
    $('#radio-women').on('click', function () {
        $('.filter-check-box').prop('checked', false);
        $('.loading').show();
        var url = webURL + "users/searchwomenitem/";
        $.ajax({
            type: "POST",
            url: url,
            data: {}, // serializes the form's elements.
            // dataType: 'json',
            context: this,
//            beforeSend: function() {
//              $("#loading-image").show();
//           },
            success: function (data)
            {
                //console.info(data); // show response from the php script.
                $('#LoadAllItems').html(data);
                $('.hide-pagination').hide();
                $('.loading').hide();
            }
        });
    });
    $('.find__item').on('click', function () {
        var val = $(this).attr('rel');
        var url = webURL + "users/finditems_create/" + val;
        // alert(url);return false;
        $.ajax({
            type: "POST",
            url: url,
            data: {}, // serializes the form's elements.
            // dataType: 'json',
            context: this,
            success: function (data)
            {
                console.info(data); // show response from the php script.
                $('.getitemlist').html(data);
                $(".origin").draggable({
                    cursor: "move",
                    revert: "invalid",
                    helper: "clone",
                });
                //$('.hide-pagination').hide();
            }
        });
    });
    $('#this-week').on('click', function () {
        $('.loading').show();
        var url = webURL + "users/getweek_item/";
        $.ajax({
            type: "POST",
            url: url,
            data: {}, // serializes the form's elements.
            // dataType: 'json',
            context: this,
            success: function (data)
            {
                console.info(data); // show response from the php script.
                $('#LoadAllItems').html(data);
                $('.loading').hide();
                // $('.hide-pagination').hide();  

            }
        });
    });
    $('#this-month').on('click', function () {
        $('.loading').show();
        var url = webURL + "users/getmonth_item/";
        $.ajax({
            type: "POST",
            url: url,
            data: {}, // serializes the form's elements.
            // dataType: 'json',
            context: this,
            success: function (data)
            {
                console.info(data); // show response from the php script.
                $('#LoadAllItems').html(data);
                $('.loading').hide();
                // $('.hide-pagination').hide();

            }
        });
    });
///////////////////////////////////////////////////////////forget password
    $("#frmForgot").submit(function (e) {
        var url = webURL + "users/user_forgot";
        // alert(url); return false;
        $.ajax({
            type: "POST",
            url: url,
            data: $("#frmForgot").serialize(), // serializes the form's elements.
            dataType: 'json',
            context: this,
            success: function (data)
            {
                console.info(data); // show response from the php script.forgot-set-html
                if (data.status == 'success') {
                    $('#frmForgot').hide();
                    $('.forgot-set-html').html(data.message);
                } else {
                    $('.forgot-set-html').html(data.message);
                }
            }
        });
        e.preventDefault(); // avoid to execute the actual submit of the form.
    });

    $("#user_resets").submit(function (e) {
        var url = webURL + "users/password_reset"; // the script where you handle the form input.
        // alert(url); return false;
        $.ajax({
            type: "POST",
            url: url,
            data: $("#user_resets").serialize(), // serializes the form's elements.
            dataType: 'json',
            context: this,
            success: function (data)
            {
                console.info(data); // show response from the php script.
                if (data.status == 'success') {
                    $('.hide-reset-form').hide();
                    $('.rest-success-data').html(data.message);
                } else {
                    $('.error-data').html(data.message);

                    // alert(data.message);
                }
            }

        });
        e.preventDefault(); // avoid to execute the actual submit of the form.        
    });

    ///////////////////////////////////////////// Submit feed
    $('.feed-lookbook').on("click", function () {
        $('#feedmodal').modal('show');
        $('.feed-lookbook-id').val($(this).attr('rel'))
    });
    $('.btn-post-feed').on('click', function () {
        var lookbk_id = $('.feed-lookbook-id').val();
        var lookbk_title = $('.input-post-feed').val();
        var date = new Date() / 1000;
        var obj = date.toString();
        var url = webURL + "users/lookbook_post"; // the script where you handle the form input.
        $.ajax({
            type: "POST",
            url: url,
            data: {lookbk_id: lookbk_id, lookbk_title: lookbk_title, timestamp: obj}, // serializes the form's elements.
            dataType: 'json',
            context: this,
            success: function (data)
            {
                if (data.status == 'success') {
                    window.location.href = webURL + "users/feed";

                } else {

                }
            }
        });
    });
    /////////////////////////////////////////
    var date = new Date() / 1000;
    var objc = date.toString();
    $('.copy_timestamp').val(objc);
    $(".postimagefeed").submit(function (e) {

        $('.lds-facebook').show();
        $('#imagefeedmodal').modal('hide');

        var url = webURL + "/users/post_feed_image/";
        var form = $('.postimagefeed')[0];
        // Create an FormData object
        var data = new FormData(form);
        // console.info(data);
        // alert( data);return false;
        // alert( $('.copy_image').attr('src', e.target.result));return false;

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: url,
            data: data,
            processData: false,
            contentType: false,
            dataType: 'json',
            context: this,
            success: function (data)
            {
                console.info(data);
                if (data.status == 'success') {
                    window.location.href = "";
                } else {

                }
            }
        });
        e.preventDefault();
    });
    ///////////////////////////////////////////
    /////////////////////////////////////////create feedback
    $(".postfeedback").submit(function (e) {
        var url = webURL + "users/post_feedback";
        $.ajax({
            type: "POST",
            url: url,
            data: $(".postfeedback").serialize(),
            dataType: 'json',
            context: this,
            success: function (data)
            {
                console.info(data);
                if (data.status == 'success') {
                    window.location.href = "";
                } else {

                }
            }
        });
        e.preventDefault(); // avoid to execute the actual submit of the form.
    });

    $('.feedback-btn').on('click', function () {
        $('#feedbackFrom').modal('hide');
        setTimeout(function () {
            $('#LoginPopup').modal('show');
        }, 350);
    });

});

$(document).ready(function () {
    $("body").tooltip({selector: '[data-toggle=tooltip]'});
    ////////////////

    $('.SubmitEnter').click(function (event) {
        var val = $('.beInTheKnowInput').val();
        if (val === '') {
            swal({
                type: 'error',
                title: '',
                text: 'Please enter email address before submit!',
                confirmButtonColor: '#000'
            });
            return false;
        }
        var url = webURL + "users/createNewsLetter"; // the script where you handle the form input.
        $.ajax({
            type: "POST",
            url: url,
            data: {email: val}, // serializes the form's elements.
            dataType: 'json',
            context: this,
            success: function (data)
            {
                if (data.status == 'success') {
                    $('.beInTheKnowInput').val('');
                    swal({
                        type: 'success',
                        title: '',
                        text: 'Thank you for Registering! You are on the List!',
                        confirmButtonColor: '#000'
                    })

                } else {
                    swal('', 'Email Required');
                }
            }
        });
        event.preventDefault();
    });
});

$(document).on('click', '.LoadMyTimeline', function (e) {
    var rel = $('.LoadMyTimeline').attr('rel');
    $('.loading').show();
    $.ajax({
        type: "POST",
        url: webURL + "users/lookbooks",
        data: {offset: rel},
        dataType: 'json',
        context: this,
        success: function (data)
        {
            if (data.status == 'success') {
                $('.loading').hide();
                $('#item-data').append(data.data);
                $('.LoadMyTimeline').attr('rel', data.offset);
            } else {
                $('.loading').hide();
                $('.LoadMyTimeline').attr('rel', data.offset);
                $('.LoadMyTimeline').html(data.message);
            }
        }
    });
});

var myDiv = document.getElementById('myDiv'); //get #myDiv


$(document).on('click', '.LoadMyFeed', function (e) {
    var rel = $('.LoadMyFeed').attr('rel');
    $.ajax({
        type: "POST",
        url: webURL + "users/feed",
        data: {offset: rel},
        dataType: 'json',
        context: this,
        success: function (data)
        {
            if (data.status == 'success') {
                $('.AppendFeeds').append(data.data);
                $('.LoadMyFeed').attr('rel', data.offset);
            } else {
                $('.LoadMyFeed').attr('rel', data.offset);
                $('.LoadMyFeed').html(data.message);

                $(".LoadFeedContainer").fadeOut(2000);
            }
        }
    });
});
$(document).on('click', '.ApplyForJob', function (e) {
    $('#ApplyJob').modal('show');
});

$(document).ready(function () {
    $(".ApplyJobForm").submit(function (e) {
        var rel = $('.ApplyForJob').attr('rel');
        var url = webURL + "users/applyJob/" + rel;

        $.ajax({
            type: "POST",
            url: url,
            data: $(".ApplyJobForm").serialize(),
            dataType: 'json',
            context: this,
            success: function (data)
            {
                console.info(data);
                if (data.status == 'success') {
                    swal("", data.message, );
                    $('.ApplyJobForm input').val('');
                    $('.ApplyJobForm textarea').val('');
                } else {
                    swal("", data.message, );
                }
            }
        });
        e.preventDefault(); // avoid to execute the actual submit of the form.
    });
});
$(document).on('click', '.LoadCatItems', function (e) {
    var rel = $('.LoadCatItems').attr('rel');
    var category_id = $('.LoadCatItems').attr('data-id');
    $('.loading').show();
    $.ajax({
        type: "POST",
        url: webURL + "users/gettemsbycategory",
        data: {offset: rel, category_id: category_id},
        dataType: 'json',
        context: this,
        success: function (data)
        {
            if (data.status == 'success') {
                $('.loading').hide();
                $('#CategoryItems').append(data.data);
                $('.LoadCatItems').attr('rel', data.offset);
            } else {
                $('.loading').hide();
                $('.LoadCatItems').attr('rel', data.offset);
                $('.LoadCatItems').html(data.message);
                $(".LoadCatItems").fadeOut('slow');
            }
        }
    });
});
$(document).on('click', '.LoadGridCategory', function (e) {
    var rel = $('.LoadGridCategory').attr('rel');
    var category_id = $('.LoadGridCategory').attr('data-id');
    $('.loading').show();
    $.ajax({
        type: "POST",
        url: webURL + "users/gridcategory",
        data: {offset: rel, category_id: category_id},
        dataType: 'json',
        context: this,
        success: function (data)
        {
            if (data.status == 'success') {
                $('.loading').hide();
                $('#CategoryItems').append(data.data);
                $('.LoadGridCategory').attr('rel', data.offset);
            } else {
                $('.loading').hide();
                $('.LoadGridCategory').attr('rel', data.offset);
                $('.LoadGridCategory').html(data.message);
                $(".LoadGridCategory").fadeOut('slow');
            }
        }
    });
});
$(document).on('click', '.LoadSwipeCategory', function (e) {
    var rel = $('.LoadSwipeCategory').attr('rel');
    var category_id = $('.LoadSwipeCategory').attr('data-id');
    $('.loading').show();
    $.ajax({
        type: "POST",
        url: webURL + "users/swipecategory",
        data: {offset: rel, category_id: category_id},
        dataType: 'json',
        context: this,
        success: function (data)
        {
            if (data.status == 'success') {
                $('.loading').hide();
                $('#CategoryItems').append(data.data);
                $('.LoadSwipeCategory').attr('rel', data.offset);
            } else {
                $('.loading').hide();
                $('.LoadSwipeCategory').attr('rel', data.offset);
                $('.LoadSwipeCategory').html(data.message);
                $(".LoadSwipeCategory").fadeOut('slow');
            }
        }
    });
});
$(document).on('click', '.LoadDesignerItems', function (e) {
    var rel = $('.LoadDesignerItems').attr('rel');
    var designer_id = $('.LoadDesignerItems').attr('data-id');
    $('.loading').show();
    $.ajax({
        type: "POST",
        url: webURL + "users/allfoliosbydesigner",
        data: {offset: rel, designer_id: designer_id, type: 'items'},
        dataType: 'json',
        context: this,
        success: function (data)
        {
            if (data.status == 'success') {
                $('.loading').hide();
                $('.DesignerItems').append(data.data);
                $('.LoadDesignerItems').attr('rel', data.offset);

            } else {
                $('.loading').hide();
                $('.LoadDesignerItems').attr('rel', data.offset);
                $('.LoadDesignerItems').html(data.message);
                $(".LoadDesignerItems").fadeOut('slow');
            }
        }
    });
});
$(document).on('click', '.LoadDesignerFolios', function (e) {
    var rel = $('.LoadDesignerFolios').attr('rel');
    var designer_id = $('.LoadDesignerFolios').attr('data-id');

    $('.loading').show();
    $.ajax({
        type: "POST",
        url: webURL + "users/allfoliosbydesigner",
        data: {offset: rel, designer_id: designer_id, type: 'folios'},
        dataType: 'json',
        context: this,
        success: function (data)
        {
            if (data.status == 'success') {
                $('.loading').hide();
                $('.DesignerFolios').append(data.data);
                $('.LoadDesignerFolios').attr('rel', data.offset);

            } else {
                $('.loading').hide();
                $('.LoadDesignerFolios').attr('rel', data.offset);
                $('.LoadDesignerFolios').html(data.message);
                $(".LoadDesignerFolios").fadeOut('slow');
            }
        }
    });
});
//
$(document).on('click', '.LoadFeaturedItems', function (e) {
    var rel = $('.LoadFeaturedItems').attr('rel');
    var category_id = $('.LoadFeaturedItems').attr('data-id');
    $('.loading').show();
    $.ajax({
        type: "POST",
        url: webURL + "users/featured_detail",
        data: {offset: rel, category_id: category_id},
        dataType: 'json',
        context: this,
        success: function (data)
        {
            if (data.status == 'success') {
                $('.loading').hide();
                $('#FeaturedItems').append(data.data);
                $('.LoadFeaturedItems').attr('rel', data.offset);
            } else {
                $('.loading').hide();
                $('.LoadFeaturedItems').attr('rel', data.offset);
                $('.LoadFeaturedItems').html(data.message);
                $(".LoadFeaturedItems").fadeOut('slow');
            }
        }
    });
});
$(document).on('click', '.LoadItemsFolios', function (e) {
    var rel = $('.LoadItemsFolios').attr('rel');
    var item_id = $('.LoadItemsFolios').attr('data-id');
    $('.loading').show();
    $.ajax({
        type: "POST",
        url: webURL + "users/item_detail",
        data: {offset: rel, item_id: item_id},
        dataType: 'json',
        context: this,
        success: function (data)
        {
            if (data.status == 'success') {
                $('.loading').hide();
                $('#ItemDetailFolios').append(data.data);
                $('.LoadItemsFolios').attr('rel', data.offset);
            } else {
                $('.loading').hide();
                $('.LoadItemsFolios').attr('rel', data.offset);
                $('.LoadItemsFolios').html(data.message);
                $(".LoadItemsFolios").fadeOut('slow');
            }
        }
    });
});


//jQuery(document).ready(function () {
//    var length = $.session.get("Discover");
//   // alert(length);return false;
//    if (length !== '') {
//        var rel = '12';
//        $.ajax({
//            type: "POST",
//            url: webURL + "users/discover",
//            data: {new_limit: length},
//            dataType: 'json',
//            context: this,
//            success: function (data)
//            {
//                if (data.status == 'success') {
//                    $('.loading').hide();
//                    $('#LoadAllItems').append(data.data);
//                    $.session.remove('Discover');
//                    //$.session.clear();
//                } else {
//                    $('.loading').hide();
//                    //$.session.clear();
//                }
//            }
//        });
//    }
//});

$(document).on('click', '.LoadAllItems', function (e) {
    var rel = $('.LoadAllItems').attr('rel');
    $('.loading').show();

    $.ajax({
        type: "POST",
        url: webURL + "users/discover",
        data: {offset: rel},
        dataType: 'json',
        context: this,
        success: function (data)
        {
            if (data.status == 'success') {
                $('.loading').hide();
                $('#LoadAllItems').append(data.data);
                $('.LoadAllItems').attr('rel', data.offset);
                //$.session.set("Discover", $('#LoadAllItems .col-padding-item').length);
            } else {
                $('.loading').hide();
                $('.LoadAllItems').attr('rel', data.offset);
                $('.LoadAllItems').html(data.message);
                $(".LoadAllItems").fadeOut('slow');
                
            }
        }
    });
});
$(document).on('click', '.LoadAllItems2', function (e) {
    var rel = $('.LoadAllItems2').attr('rel');
    $('.loading').show();
    $.ajax({
        type: "POST",
        url: webURL + "users/createlookbook",
        data: {offset: rel},
        dataType: 'json',
        context: this,
        success: function (data)
        {
            if (data.status == 'success') {
                $('.loading').hide();
                $('#LoadAllItems2').append(data.data);
                $('.LoadAllItems2').attr('rel', data.offset);
            } else {
                $('.loading').hide();
                $('.LoadAllItems2').attr('rel', data.offset);
                $('.LoadAllItems2').html(data.message);
                $(".LoadAllItems2").fadeOut('slow');
            }
        }
    });
});
$(document).on('click', '.LoadAllEditItems', function (e) {
    var rel = $('.LoadAllEditItems').attr('rel');
    var id_lookbook = $('.LoadAllEditItems').attr('data-id');
    $('.loading').show();
    $.ajax({
        type: "POST",
        url: webURL + "users/editlookbook",
        data: {offset: rel, id_lookbook: id_lookbook},
        dataType: 'json',
        context: this,
        success: function (data)
        {
            if (data.status == 'success') {
                $('.loading').hide();
                $('#LoadAllEditItems').append(data.data);
                $('.LoadAllEditItems').attr('rel', data.offset);
            } else {
                $('.loading').hide();
                $('.LoadAllEditItems').attr('rel', data.offset);
                $('.LoadAllEditItems').html(data.message);
                $(".LoadAllEditItems").fadeOut('slow');
            }
        }
    });
});

$(document).on('click', '.LoadCollectionItems', function (e) {
    var rel = $('.LoadCollectionItems').attr('rel');
    var collection_id = $('.LoadCollectionItems').attr('data-id');
    $('.loading').show();
    $.ajax({
        type: "POST",
        url: webURL + "users/getitemsbycollection",
        data: {offset: rel, collection_id: collection_id},
        dataType: 'json',
        context: this,
        success: function (data)
        {
            if (data.status == 'success') {
                $('.loading').hide();
                $('#CollectionItems').append(data.data);
                $('.LoadCollectionItems').attr('rel', data.offset);
            } else {
                $('.loading').hide();
                $('.LoadCollectionItems').attr('rel', data.offset);
                $('.LoadCollectionItems').html(data.message);
                $(".LoadCollectionItems").fadeOut('slow');
            }
        }
    });
});

$(document).on('click', '.LoadSubCategory', function (e) {
    var rel = $('.LoadSubCategory').attr('rel');
    var category_id = $('.LoadSubCategory').attr('data-id');
    $('.loading').show();
    $.ajax({
        type: "POST",
        url: webURL + "users/slugcategory",
        data: {offset: rel, category_id: category_id},
        dataType: 'json',
        context: this,
        success: function (data)
        {
            if (data.status == 'success') {
                $('.loading').hide();
                $('#CategoryItems').append(data.data);
                $('.LoadSubCategory').attr('rel', data.offset);
            } else {
                $('.loading').hide();
                $('.LoadSubCategory').attr('rel', data.offset);
                $('.LoadSubCategory').html(data.message);
                $(".LoadSubCategory").fadeOut('slow');
            }
        }
    });
});