$(document).ready(function () {

    $("#exampleModalLoginLong").submit(function (e) {
        var url = "http://localhost/Donation/modal.php";
       // var das = ;
        // alert(das);
        $.ajax({
            type: "POST",
            url: url,
            data: new FormData($('#exampleModalLoginLong')[0]),
            dataType: 'json',
            processData: false,                          // Using FormData, no need to process data.
            contentType:false,
            context: this,
            success: function (data) {
                console.info(data);
                if (data.status == 'success') {
                    // window.location.href = webURL + "index.php";
                } else {
                    alert('eror');
                }
            }
        });
        e.preventDefault(); // avoid to execute the actual submit of the form.
    });




});